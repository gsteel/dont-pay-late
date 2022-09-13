<?php

declare(strict_types=1);

namespace App\BaseRate;

use DateInterval;
use DateTimeImmutable;
use DateTimeInterface;
use Psl\Json;
use Psr\Cache\CacheItemPoolInterface;
use StellaMaris\Clock\ClockInterface;

use function is_string;

final class BaseRateHistory
{
    public function __construct(
        private readonly CacheItemPoolInterface $cache,
        private readonly ClientContract $client,
        private readonly ClockInterface $clock,
        private readonly DateInterval $maxAge,
    ) {
    }

    public function get(): ChangeList
    {
        $list = $this->getCached();
        if ($list) {
            return $list;
        }

        return $this->fetchAndStore();
    }

    public function update(): void
    {
        $expires = $this->lastUpdateTime();
        if ($expires && $this->clock->now() < $expires->add($this->maxAge)) {
            return;
        }

        $this->fetchAndStore();
    }

    private function getCached(): ChangeList|null
    {
        $item = $this->cache->getItem(BaseRateCache::CACHE_KEY);
        if (! $item->isHit()) {
            return null;
        }

        $value = $item->get();
        if (! is_string($value)) {
            return null;
        }

        /** @psalm-var list<array{date:string, rate:float}> $data */
        $data = Json\decode($value, true);

        return ChangeList::fromJsonArray($data);
    }

    private function fetchAndStore(): ChangeList
    {
        $changeList = $this->client->fetchAll();
        $item = $this->cache->getItem(BaseRateCache::CACHE_KEY);
        $item->set(Json\encode($changeList));
        $this->cache->save($item);
        $this->setUpdateTime($this->clock->now());

        return $changeList;
    }

    private function setUpdateTime(DateTimeImmutable $date): void
    {
        $update = $this->cache->getItem(BaseRateCache::LAST_UPDATE_KEY);
        $update->set($date->format(DateTimeInterface::ATOM));
        $this->cache->save($update);
    }

    public function lastUpdateTime(): DateTimeImmutable|null
    {
        $update = $this->cache->getItem(BaseRateCache::LAST_UPDATE_KEY);
        $value = $update->get();
        if (! is_string($value)) {
            return null;
        }

        $date = DateTimeImmutable::createFromFormat(DateTimeInterface::ATOM, $value);

        return $date instanceof DateTimeImmutable ? $date : null;
    }
}
