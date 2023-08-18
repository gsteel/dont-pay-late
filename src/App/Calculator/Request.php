<?php

declare(strict_types=1);

namespace App\Calculator;

use App\Time\Util;
use DateTimeImmutable;
use Money\Currencies\ISOCurrencies;
use Money\Currency;
use Money\Money;
use Money\Parser\DecimalMoneyParser;

final readonly class Request
{
    /** @param non-empty-string $currencyCode */
    private function __construct(
        public DateTimeImmutable $dueDate,
        public int $termsInDays,
        public int $amount,
        public string $currencyCode,
        public DateTimeImmutable $now,
    ) {
    }

    public static function new(
        DateTimeImmutable $dueDate,
        int $termsInDays,
        Money $amount,
        DateTimeImmutable $now,
    ): self {
        return new self(
            $dueDate,
            $termsInDays,
            (int) $amount->getAmount(),
            $amount->getCurrency()->getCode(),
            $now,
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

    /**
     * @param array<string, mixed> $data
     * @psalm-param array{
     *     dueDate: non-empty-string,
     *     termsInDays: int<0, 365>,
     *     amount: float,
     *     ...
     * } $data
     */
    public static function fromArray(array $data, Currency $currency, DateTimeImmutable $now): self
    {
        $parse = new DecimalMoneyParser(new ISOCurrencies());
        $amount = $parse->parse((string) $data['amount'], $currency);

        return self::new(
            Util::dateFromFormat('!Y-m-d', $data['dueDate'], $now->getTimezone()),
            $data['termsInDays'],
            $amount,
            $now,
        );
    }
}
