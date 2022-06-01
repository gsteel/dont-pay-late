<?php

declare(strict_types=1);

namespace AppTest\Unit\BaseRate;

use App\BaseRate\BaseRateCache;
use App\BaseRate\BaseRateHistory;
use DateInterval;
use DateTimeImmutable;
use Lcobucci\Clock\FrozenClock;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Cache\Adapter\ArrayAdapter;

use function assert;

class BaseRateHistoryTest extends TestCase
{
    private ArrayAdapter $cache;
    private BaseRateHistory $history;
    private FrozenClock $clock;
    private FixtureClient $client;

    protected function setUp(): void
    {
        parent::setUp();

        $this->clock = new FrozenClock(self::date('2020-01-01'));
        $this->cache = new ArrayAdapter();
        $this->client = new FixtureClient();
        $this->history = new BaseRateHistory(
            $this->cache,
            $this->client,
            $this->clock,
            new DateInterval('P7D')
        );
    }

    private static function date(string $date): DateTimeImmutable
    {
        $dt = DateTimeImmutable::createFromFormat('!Y-m-d', $date);
        assert($dt instanceof DateTimeImmutable);

        return $dt;
    }

    public function testCacheIsEmpty(): void
    {
        $item = $this->cache->getItem(BaseRateCache::CACHE_KEY);
        self::assertFalse($item->isHit());
        $item = $this->cache->getItem(BaseRateCache::LAST_UPDATE_KEY);
        self::assertFalse($item->isHit());
        self::assertNull($this->history->lastUpdateTime());
    }

    public function testThatFetchingHistoryWillPersistDataInTheCache(): void
    {
        $this->history->get();

        $item = $this->cache->getItem(BaseRateCache::CACHE_KEY);
        self::assertTrue($item->isHit());
        self::assertEquals($this->clock->now(), $this->history->lastUpdateTime());
        self::assertEquals(1, $this->client->invocationCount);
    }

    public function testHistoryWillBeReturnedFromCacheOnSubsequentRequests(): void
    {
        $this->history->get();
        $this->history->get();
        self::assertEquals(1, $this->client->invocationCount);
    }

    public function testUpdateWillFetchWhenTheCacheIsEmpty(): void
    {
        $this->history->update();
        self::assertEquals(1, $this->client->invocationCount);
    }

    public function testThatUpdateWillNotFetchWhenTheCacheIsCurrent(): void
    {
        $this->history->get();
        $this->history->update();
        self::assertEquals(1, $this->client->invocationCount);
    }

    public function testUpdateWillFetchWhenTheCacheHasExpired(): void
    {
        $this->history->update();
        $this->clock->setTo(self::date('2021-01-01'));
        $this->history->update();
        self::assertEquals(2, $this->client->invocationCount);
    }

    public function testGetWillReturnStaleData(): void
    {
        $this->history->update();
        $this->clock->setTo(self::date('2021-01-01'));
        $this->history->get();
        self::assertEquals(1, $this->client->invocationCount);
    }
}
