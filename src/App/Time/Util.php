<?php

declare(strict_types=1);

namespace App\Time;

use App\Exception\InvalidArgument;
use DateTimeImmutable;
use DateTimeZone;

use function date_get_last_errors;
use function implode;
use function sprintf;

final class Util
{
    private function __construct()
    {
    }

    public static function dateFromFormat(string $format, string $date, DateTimeZone $timeZone): DateTimeImmutable
    {
        $date = DateTimeImmutable::createFromFormat($format, $date, $timeZone);
        if (! $date) {
            throw new InvalidArgument(
                sprintf('Invalid date values: %s', implode(', ', date_get_last_errors()['errors'])),
            );
        }

        return $date;
    }
}
