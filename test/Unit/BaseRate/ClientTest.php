<?php

declare(strict_types=1);

namespace AppTest\Unit\BaseRate;

use App\BaseRate\Client;
use DateTimeImmutable;
use DateTimeZone;
use Lcobucci\Clock\FrozenClock;
use PHPUnit\Framework\TestCase;
use Psr\Http\Client\ClientInterface;
use Psr\Http\Message\RequestFactoryInterface;
use Psr\Http\Message\UriFactoryInterface;

use function assert;
use function count;
use function file_get_contents;

class ClientTest extends TestCase
{
    private Client $client;

    protected function setUp(): void
    {
        parent::setUp();

        $now = DateTimeImmutable::createFromFormat('!Y-m-d', '2022-01-01');
        assert($now !== false);

        $this->client = new Client(
            $this->createMock(ClientInterface::class),
            $this->createMock(UriFactoryInterface::class),
            $this->createMock(RequestFactoryInterface::class),
            new FrozenClock($now),
            new DateTimeZone('Europe/London')
        );
    }

    public function testAnErrorIsThrownWhenAReaderCannotBeInstantiatedFromTheGivenXmlString(): void
    {
        $this->expectError();
        $this->client->extractRateChanges('<xml><is screwed>');
    }

    public function testThatRatesCanBeExtractedFromKnownXmlFormat(): void
    {
        $list = $this->client->extractRateChanges(file_get_contents(__DIR__ . '/fixture/feed.xml'));
        self::assertGreaterThan(1, count($list));
    }
}
