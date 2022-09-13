<?php

declare(strict_types=1);

namespace App\BaseRate;

use App\Exception\InvalidArgument;
use App\Exception\RuntimeError;
use App\Util\Assert;
use DateTimeImmutable;
use DateTimeZone;
use Psr\Http\Client\ClientInterface as HttpClient;
use Psr\Http\Message\RequestFactoryInterface;
use Psr\Http\Message\UriFactoryInterface;
use StellaMaris\Clock\ClockInterface;
use Throwable;
use XMLReader;

use function http_build_query;
use function is_numeric;
use function sprintf;
use function str_contains;
use function strtolower;

final class Client implements ClientContract
{
    private const ENDPOINT = 'https://www.bankofengland.co.uk/boeapps/database/_iadb-fromshowcolumns.asp';
    private const SERIES_ID = 'IUDBEDR';
    public const EPOCH = '1975-01-02';

    public function __construct(
        private readonly HttpClient $httpClient,
        private readonly UriFactoryInterface $uriFactory,
        private readonly RequestFactoryInterface $requestFactory,
        private readonly ClockInterface $clock,
        private readonly DateTimeZone $resultTimezone,
    ) {
    }

    public function minimumDate(): DateTimeImmutable
    {
        $date = DateTimeImmutable::createFromFormat('!Y-m-d', self::EPOCH, $this->resultTimezone);
        Assert::isInstanceOf($date, DateTimeImmutable::class);

        return $date;
    }

    public function fetchAll(): ChangeList
    {
        return self::extractRateChanges(
            $this->fetchXml($this->minimumDate(), $this->clock->now()),
            $this->resultTimezone,
        );
    }

    public static function extractRateChanges(string $xml, DateTimeZone $timeZone): ChangeList
    {
        /**
         * The XML provided by the BoE is absolute garbage.
         *
         * It's not feasible to check for valid XML because it simply never is. For now, errors will just halt execution
         */
        $reader = XMLReader::XML($xml);
        /** @psalm-suppress RedundantCondition, TypeDoesNotContainType */
        if (! $reader instanceof XMLReader) {
            throw new InvalidArgument('The base rate xml string provided cannot be used');
        }

        return self::read($reader, $timeZone);
    }

    private static function read(XMLReader $reader, DateTimeZone $timeZone): ChangeList
    {
        $rates = [];
        while ($reader->read()) {
            if ($reader->nodeType !== XMLReader::ELEMENT || $reader->name !== 'Cube') {
                continue;
            }

            $time = $reader->getAttribute('TIME');
            $rate = $reader->getAttribute('OBS_VALUE');

            if ($time === null || $rate === null) {
                continue;
            }

            $date = DateTimeImmutable::createFromFormat('!Y-m-d', $time, $timeZone);
            $rate = is_numeric($rate) ? (float) $rate : null;

            if (! $date || $rate === null) {
                continue;
            }

            $rates[] = new RateChange($date, $rate);
        }

        return ChangeList::fromArray($rates);
    }

    private function fetchXml(DateTimeImmutable $from, DateTimeImmutable $to): string
    {
        $query = [
            'SeriesCodes' => self::SERIES_ID,
            'CodeVer' => 'new',
            'xml.x' => '1',
            'Datefrom' => $from->format('d/M/Y'),
            'Dateto' => $to->format('d/M/Y'),
        ];

        $uri = $this->uriFactory->createUri(self::ENDPOINT)
            ->withQuery(http_build_query($query));

        $request = $this->requestFactory->createRequest('GET', $uri);
        try {
            $response = $this->httpClient->sendRequest($request);
        } catch (Throwable $error) {
            throw new RuntimeError(sprintf(
                'Failed to retrieve the base rate data with the URI "%s"',
                (string) $uri,
            ), 0, $error);
        }

        $contentType = $response->getHeaderLine('Content-Type');
        if (! str_contains(strtolower($contentType), 'xml')) {
            throw new RuntimeError(sprintf(
                'Unexpected content type. Expecting XML, received "%s"',
                $contentType,
            ));
        }

        return (string) $response->getBody();
    }
}
