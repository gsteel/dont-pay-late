<?php

declare(strict_types=1);

namespace App\Calculator;

use DateTimeImmutable;
use Money\Currency;
use Money\Money;

final class Request
{
    /** @param non-empty-string $currencyCode */
    private function __construct(
        public readonly DateTimeImmutable $dueDate,
        public readonly int $termsInDays,
        public readonly int $amount,
        public readonly string $currencyCode,
        public readonly DateTimeImmutable $now
    ) {
    }

    public static function new(
        DateTimeImmutable $dueDate,
        int $termsInDays,
        Money $amount,
        DateTimeImmutable $now
    ): self {
        return new self(
            $dueDate,
            $termsInDays,
            (int) $amount->getAmount(),
            $amount->getCurrency()->getCode(),
            $now
        );
    }

    public function currency(): Currency
    {
        return new Currency($this->currencyCode);
    }

    public function amount(): Money
    {
        return new Money($this->amount, $this->currency());
    }
}
