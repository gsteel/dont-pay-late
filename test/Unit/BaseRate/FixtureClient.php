<?php

declare(strict_types=1);

namespace AppTest\Unit\BaseRate;

use App\BaseRate\ChangeList;
use App\BaseRate\Client;
use App\BaseRate\ClientContract;
use DateTimeImmutable;
use DateTimeZone;

use function assert;
use function Psl\File\read;

final class FixtureClient implements ClientContract
{
    public int $invocationCount = 0;

    public function minimumDate(): DateTimeImmutable
    {
        $date = DateTimeImmutable::createFromFormat('!Y-m-d', Client::EPOCH);
        assert($date instanceof DateTimeImmutable);

        return $date;
    }

    public function fetchAll(): ChangeList
    {
        $this->invocationCount++;

        return Client::extractRateChanges(
            read(__DIR__ . '/fixture/feed.xml'),
            new DateTimeZone('UTC'),
        );
    }
}
