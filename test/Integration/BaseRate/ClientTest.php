<?php

declare(strict_types=1);

namespace AppTest\Integration\BaseRate;

use App\BaseRate\Client;
use AppTest\Integration\Framework\TestCase;
use DateTimeImmutable;
use DateTimeZone;
use Laminas\Diactoros\RequestFactory;
use Laminas\Diactoros\UriFactory;
use Lcobucci\Clock\SystemClock;

use function assert;

final class ClientTest extends TestCase
{
    private static function date(string $date): DateTimeImmutable
    {
        $dt = DateTimeImmutable::createFromFormat('!Y-m-d', $date);
        assert($dt instanceof DateTimeImmutable);

        return $dt;
    }

    public function testThatRatesCanBeFetchedAndParsedFromTheBankOfEnglandWebsite(): void
    {
        $timezone = new DateTimeZone('Europe/London');
        $client = new Client(
            new \Http\Client\Curl\Client(),
            new UriFactory(),
            new RequestFactory(),
            new SystemClock($timezone),
            $timezone,
        );

        $rates = $client->fetchAll();

        $rate = $rates->findChangeOnOrPreceding($client->minimumDate());
        self::assertNotNull($rate);
        self::assertEquals(11.5, $rate->rate);

        $rate = $rates->findChangeOnOrPreceding(self::date('1985-01-14'));
        self::assertNotNull($rate);
        self::assertEquals(11.875, $rate->rate);
    }
}
