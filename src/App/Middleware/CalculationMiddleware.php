<?php

declare(strict_types=1);

namespace App\Middleware;

use App\Calculator\Calculation;
use App\Calculator\Calculator;
use App\Calculator\Request;
use App\InputFilter\CalculationRequestInputFilter;
use App\Util\Assert;
use Fig\Http\Message\StatusCodeInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Money\Currencies\ISOCurrencies;
use Money\Currency;
use Money\Formatter\DecimalMoneyFormatter;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use StellaMaris\Clock\ClockInterface;
use Throwable;

use function implode;
use function is_array;
use function is_string;
use function Psl\Json\decode;
use function str_contains;

final class CalculationMiddleware implements MiddlewareInterface
{
    public function __construct(
        private readonly Calculator $calculator,
        private readonly CalculationRequestInputFilter $inputFilter,
        private readonly Currency $currency,
        private readonly ClockInterface $clock,
    ) {
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $contentType = $request->getHeaderLine('Content-Type');
        if (! str_contains($contentType, 'application/json')) {
            return $this->errorResponse(StatusCodeInterface::STATUS_NOT_ACCEPTABLE, ['You must provide a JSON content-type header']);
        }

        $body = (string) $request->getBody();
        try {
            $payload = decode($body, true);
            Assert::isArray($payload);
        } catch (Throwable) {
            return $this->errorResponse(StatusCodeInterface::STATUS_BAD_REQUEST, ['Expected a valid JSON Payload']);
        }

        $this->inputFilter->setData($payload);
        if (! $this->inputFilter->isValid()) {
            $messages = $this->flattenErrorMessages($this->inputFilter->getMessages());

            return $this->errorResponse(StatusCodeInterface::STATUS_BAD_REQUEST, $messages);
        }

        $calculationRequest = Request::fromArray($this->inputFilter->getValidValues(), $this->currency, $this->clock->now());

        $result = $this->calculator->calculate($calculationRequest);

        return $this->result($result);
    }

    /**
     * @param array<array-key, mixed> $messages
     *
     * @return list<string>
     */
    private function flattenErrorMessages(array $messages): array
    {
        $flatten = [];
        foreach ($messages as $list) {
            if (is_string($list)) {
                $flatten[] = $list;
                continue;
            }

            if (! is_array($list)) {
                continue;
            }

            Assert::allString($list);
            $flatten[] = implode(', ', $list);
        }

        return $flatten;
    }

    /** @param list<string> $messages */
    private function errorResponse(int $status, array $messages): JsonResponse
    {
        return new JsonResponse([
            'errorMessages' => $messages,
        ], $status);
    }

    private function result(Calculation $result): ResponseInterface
    {
        $formatter = new DecimalMoneyFormatter(new ISOCurrencies());

        return new JsonResponse([
            'currency' => $this->currency->getCode(),
            'recoveryFee' => $formatter->format($result->recoveryFee()),
            'interestPayable' => $formatter->format($result->interestPayable()),
            'totalPayable' => $formatter->format($result->totalPayable()),
            'interestRate' => $result->interestRate,
            'daysOverdue' => $result->daysOverdue,
            'originalAmount' => $formatter->format($result->request->amount()),
            'dueDate' => $result->request->dueDate->format('Y-m-d'),
            'terms' => $result->request->termsInDays,
        ], StatusCodeInterface::STATUS_OK);
    }
}
