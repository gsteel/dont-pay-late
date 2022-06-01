<?php

declare(strict_types=1);

namespace AppTest\Unit\BaseRate;

use App\BaseRate\ChangeList;
use App\BaseRate\RateChange;
use DateTimeImmutable;
use PHPUnit\Framework\TestCase;
use Psl\Json;

use function assert;
use function iterator_to_array;

class ChangeListTest extends TestCase
{
    private static function date(string $date): DateTimeImmutable
    {
        $dt = DateTimeImmutable::createFromFormat('!Y-m-d', $date);
        assert($dt instanceof DateTimeImmutable);

        return $dt;
    }

    public function testThatItemsAreSortedInDateAscendingOrder(): void
    {
        $rate1 = new RateChange(self::date('2020-01-01'), 1.2);
        $rate2 = new RateChange(self::date('2010-01-01'), 1.5);
        $list = ChangeList::fromArray([
            $rate1,
            $rate2,
        ]);

        self::assertCount(2, $list);
        $rates = iterator_to_array($list, false);
        self::assertSame($rate2, $rates[0]);
        self::assertSame($rate1, $rates[1]);
    }

    public function testThatDuplicateRatesAreFilteredOut(): void
    {
        $list = ChangeList::fromArray([
            new RateChange(self::date('2020-01-01'), 1.2),
            new RateChange(self::date('2020-01-02'), 1.2),
            new RateChange(self::date('2020-01-03'), 1.2),
            new RateChange(self::date('2010-01-01'), 1.5),
            new RateChange(self::date('2014-01-01'), 1.5),
            new RateChange(self::date('2015-01-01'), 1.5),
        ]);

        self::assertCount(2, $list);
        $rates = iterator_to_array($list, false);
        self::assertEquals(1.5, $rates[0]->rate);
        self::assertEquals(1.2, $rates[1]->rate);
    }

    public function testThatRatesCanBeFoundOnAGivenDate(): void
    {
        $list = ChangeList::fromArray([
            new RateChange(self::date('2010-01-01'), 1.0),
            new RateChange(self::date('2011-01-01'), 2.0),
            new RateChange(self::date('2012-01-01'), 3.0),
        ]);

        $rate = $list->findChangeOnOrPreceding(self::date('2020-01-01'));
        self::assertInstanceOf(RateChange::class, $rate);
        self::assertEquals(3.0, $rate->rate);

        self::assertNull($list->findChangeOnOrPreceding(self::date('2000-01-01')));

        $rate = $list->findChangeOnOrPreceding(self::date('2011-01-01'));
        self::assertInstanceOf(RateChange::class, $rate);
        self::assertEquals(2.0, $rate->rate);

        $rate = $list->findChangeOnOrPreceding(self::date('2011-06-06'));
        self::assertInstanceOf(RateChange::class, $rate);
        self::assertEquals(2.0, $rate->rate);
    }

    public function testAJsonSerialiseRoundTripIsSurvived(): void
    {
        $source = ChangeList::fromArray([
            new RateChange(self::date('2010-01-01'), 1.0),
            new RateChange(self::date('2011-01-01'), 2.0),
            new RateChange(self::date('2012-01-01'), 3.0),
        ]);

        /** @psalm-var list<array{date:string, rate:float}> $decoded */
        $decoded = Json\decode(Json\encode($source));
        $list = ChangeList::fromJsonArray($decoded);

        self::assertCount(3, $list);
        foreach ($list as $item) {
            self::assertGreaterThanOrEqual(1.0, $item->rate);
            self::assertLessThanOrEqual(3.0, $item->rate);
        }
    }
}
