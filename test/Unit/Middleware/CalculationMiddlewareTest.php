<?php

declare(strict_types=1);

namespace AppTest\Unit\Middleware;

use App\BaseRate\ChangeList;
use App\BaseRate\RateChange;
use App\Calculator\RecoveryFeeLookup;
use App\Calculator\StandardCalculator;
use App\InputFilter\CalculationRequestInputFilter;
use App\Middleware\CalculationMiddleware;
use AppTest\Unit\Framework\TestCase;
use DateTimeImmutable;
use Fig\Http\Message\StatusCodeInterface;
use Laminas\Diactoros\StreamFactory;
use Lcobucci\Clock\FrozenClock;
use Money\Currency;
use Psr\Http\Message\ResponseInterface;

use function array_keys;
use function assert;
use function count;
use function Psl\Json\decode;

class CalculationMiddlewareTest extends TestCase
{
    private CalculationMiddleware $middleware;

    protected function setUp(): void
    {
        parent::setUp();
        $gbp = new Currency('GBP');
        $firstDate = self::date('2000-01-01');
        $now = self::date('2022-01-01');
        $calculator = new StandardCalculator(
            ChangeList::fromArray([
                new RateChange(
                    $firstDate,
                    8.5,
                ),
            ]),
            10.0,
            $gbp,
            new RecoveryFeeLookup($gbp),
        );

        $inputFilter = new CalculationRequestInputFilter($firstDate);
        $inputFilter->init();

        $this->middleware = new CalculationMiddleware(
            $calculator,
            $inputFilter,
            $gbp,
            new FrozenClock($now),
        );
    }

    private static function date(string $date): DateTimeImmutable
    {
        $dt = DateTimeImmutable::createFromFormat('!Y-m-d', $date);
        assert($dt instanceof DateTimeImmutable);

        return $dt;
    }

    private function assertErrorResponse(
        ResponseInterface $response,
        int $expectCode,
        string $expectMessage,
    ): void {
        self::assertResponseHasStatus($response, $expectCode);
        $body = (string) $response->getBody();
        self::assertJson($body);
        $payload = decode($body, true);
        self::assertIsArray($payload);
        self::assertArrayHasKey('errorMessages', $payload);
        self::assertIsArray($payload['errorMessages']);
        self::assertGreaterThan(0, count($payload['errorMessages']));
        foreach ($payload['errorMessages'] as $message) {
            self::assertIsString($message);
            if ($message === $expectMessage) {
                return;
            }
        }

        $this->fail('A message was not found with the expected value');
    }

    public function testThatARequestWithoutContentTypeHeaderIsExceptional(): void
    {
        $handler = $this->stubRequestHandler();
        $response = $this->middleware->process(
            $this->serverRequest('/'),
            $handler,
        );

        self::assertFalse($handler->didHandle());
        $this->assertErrorResponse(
            $response,
            StatusCodeInterface::STATUS_NOT_ACCEPTABLE,
            'You must provide a JSON content-type header',
        );
    }

    public function testThatAnInvalidPayloadIsABadRequest(): void
    {
        $body = (new StreamFactory())->createStream('{"foo": "bar"}');
        $handler = $this->stubRequestHandler();
        $request = $this->serverRequest('/')
            ->withHeader('Content-Type', 'application/json')
            ->withBody($body);
        $response = $this->middleware->process(
            $request,
            $handler,
        );

        self::assertFalse($handler->didHandle());
        $this->assertErrorResponse(
            $response,
            StatusCodeInterface::STATUS_BAD_REQUEST,
            'A value is required for the due date of the invoice',
        );
    }

    /** @return array<string, array{0: string, 1: string}> */
    public function invalidBodyDataProvider(): array
    {
        return [
            'Empty Body' => ['', 'Expected a valid JSON Payload'],
            'Invalid JSON' => ['{whut?}', 'Expected a valid JSON Payload'],
            'Invalid JSON Shape' => ['{"foo": "bar"}', 'A value is required for the due date of the invoice'],
        ];
    }

    /** @dataProvider invalidBodyDataProvider */
    public function testThatAnEmptyPayloadIsABadRequest(string $body, string $expectedErrorMessage): void
    {
        $body = (new StreamFactory())->createStream($body);
        $handler = $this->stubRequestHandler();
        $request = $this->serverRequest('/')
            ->withHeader('Content-Type', 'application/json')
            ->withBody($body);
        $response = $this->middleware->process(
            $request,
            $handler,
        );

        self::assertFalse($handler->didHandle());
        $this->assertErrorResponse(
            $response,
            StatusCodeInterface::STATUS_BAD_REQUEST,
            $expectedErrorMessage,
        );
    }

    /** @return array<string, mixed> */
    public function testThatAValidPayloadIsAJsonResponse(): array
    {
        $body = (new StreamFactory())->createStream(<<<'JSON'
            {
                "dueDate": "2020-01-01",
                "termsInDays": "42",
                "amount": "123.45"
            }
            JSON);
        $handler = $this->stubRequestHandler();
        $request = $this->serverRequest('/')
            ->withHeader('Content-Type', 'application/json')
            ->withBody($body);

        $response = $this->middleware->process(
            $request,
            $handler,
        );

        self::assertFalse($handler->didHandle());
        self::assertResponseHasStatus($response, StatusCodeInterface::STATUS_OK);
        self::assertMessageHasHeader($response, 'content-type', 'application/json');

        /** @psalm-var mixed $body */
        $body = decode((string) $response->getBody(), true);
        self::assertIsArray($body);
        self::assertContainsOnly('string', array_keys($body));
        /** @psalm-var array<string, mixed> $body */

        return $body;
    }

    /**
     * @param array<string, mixed> $body
     *
     * @depends testThatAValidPayloadIsAJsonResponse
     */
    public function testResponseBodyContainsExpectedKeys(array $body): void
    {
        $keys = [
            'currency',
            'recoveryFee',
            'interestPayable',
            'totalPayable',
            'interestRate',
            'daysOverdue',
            'originalAmount',
            'dueDate',
            'terms',
        ];

        foreach ($keys as $key) {
            self::assertArrayHasKey($key, $body);
        }

        self::assertIsString($body['currency']);
        self::assertIsString($body['recoveryFee']);
        self::assertIsString($body['interestPayable']);
        self::assertIsString($body['totalPayable']);
        self::assertIsFloat($body['interestRate']);
        self::assertIsInt($body['daysOverdue']);
        self::assertIsString($body['originalAmount']);
        self::assertIsString($body['dueDate']);
        self::assertIsInt($body['terms']);
    }
}
