<?php

declare(strict_types=1);

namespace App\Calculator;

use Money\Currency;
use Money\Money;

final readonly class RecoveryFeeLookup
{
    public function __construct(
        private Currency $currency,
    ) {
    }

    public function forAmount(Money $amount): Money
    {
        $value = (int) $amount->getAmount();
        if ($value <= 99999) {
            return new Money(4000, $this->currency);
        }

        if ($value <= 999999) {
            return new Money(7000, $this->currency);
        }

        return new Money(10000, $this->currency);
    }
}
