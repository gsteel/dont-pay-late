<?php

declare(strict_types=1);

namespace AppTest\Unit\Calculator;

use App\Calculator\Request;
use App\Time\Util;
use DateTimeZone;
use Money\Currency;
use PHPUnit\Framework\TestCase;

class RequestTest extends TestCase
{
    public function testARequestCanBeHydratedFromAnArray(): void
    {
        $now = Util::dateFromFormat('!Y-m-d', '2022-01-01', new DateTimeZone('UTC'));
        $request = Request::fromArray(
            [
                'dueDate' => '2020-01-01',
                'termsInDays' => 7,
                'amount' => 123.45,
            ],
            new Currency('GBP'),
            $now,
        );

        $expectDate = Util::dateFromFormat('!Y-m-d', '2020-01-01', new DateTimeZone('UTC'));

        self::assertEquals($expectDate, $request->dueDate);
        self::assertEquals($now, $request->now);
        self::assertEquals(7, $request->termsInDays);
        self::assertEquals(12345, $request->amount);
        self::assertEquals(new Currency('GBP'), $request->currency());
    }
}
