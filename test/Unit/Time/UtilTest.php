<?php

declare(strict_types=1);

namespace AppTest\Unit\Time;

use App\Exception\InvalidArgument;
use App\Time\Util;
use DateTimeImmutable;
use DateTimeZone;
use PHPUnit\Framework\TestCase;

class UtilTest extends TestCase
{
    public function testDateFromFormatHappyPath(): void
    {
        $utc = new DateTimeZone('UTC');
        $date = DateTimeImmutable::createFromFormat('!Y-m-d', '2020-01-01', $utc);
        self::assertNotFalse($date);
        self::assertEquals($date, Util::dateFromFormat('!Y-m-d', '2020-01-01', $utc));
    }

    public function testAnExceptionIsThrownForAnInvalidDate(): void
    {
        $utc = new DateTimeZone('UTC');
        $this->expectException(InvalidArgument::class);
        Util::dateFromFormat('!Y-m-d H:i', '2020-01-01', $utc);
    }
}
