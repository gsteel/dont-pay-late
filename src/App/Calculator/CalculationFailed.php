<?php

declare(strict_types=1);

namespace App\Calculator;

use App\Exception\RuntimeError;
use DateTimeImmutable;
use Money\Currency;

use function sprintf;

final class CalculationFailed extends RuntimeError
{
    public static function becauseBaseRateCannotBeFoundOn(DateTimeImmutable $date): self
    {
        return new self(sprintf(
            'A calculation cannot be made because I don’t know what the base rate was on %s',
            $date->format('jS F Y')
        ));
    }

    public static function becauseCurrencyIsUnsupported(Currency $currency): self
    {
        return new self(sprintf(
            'The currency "%s" is not supported',
            $currency->getCode()
        ));
    }
}
