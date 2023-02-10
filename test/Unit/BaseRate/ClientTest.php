<?php

declare(strict_types=1);

namespace AppTest\Unit\BaseRate;

use App\BaseRate\Client;
use DateTimeZone;
use PHPUnit\Framework\TestCase;
use Throwable;

use function count;
use function file_get_contents;

class ClientTest extends TestCase
{
    public function testAnErrorIsThrownWhenAReaderCannotBeInstantiatedFromTheGivenXmlString(): void
    {
        try {
            Client::extractRateChanges('<xml><is screwed>', new DateTimeZone('UTC'));
            $this->fail('A PHP Error was not issued');
        } catch (Throwable) {
            self::assertTrue(true);
        }
    }

    public function testThatRatesCanBeExtractedFromKnownXmlFormat(): void
    {
        $list = Client::extractRateChanges(file_get_contents(__DIR__ . '/fixture/feed.xml'), new DateTimeZone('UTC'));
        self::assertGreaterThan(1, count($list));
    }
}
