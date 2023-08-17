<?php

declare(strict_types=1);

namespace App\Calculator;

use DateTimeImmutable;
use Money\Money;

final readonly class Calculation
{
    private function __construct(
        public Request $request,
        public float $interestRate,
        public int $recoveryFee,
        public int $interestPayable,
        public int $daysOverdue,
        public DateTimeImmutable $referenceDate,
    ) {
    }

    public static function new(
        Request $request,
        float $interestRate,
        Money $recoveryFee,
        Money $interestPayable,
        int $daysOverdue,
        DateTimeImmutable $referenceDate,
    ): self {
        return new self(
            $request,
            $interestRate,
            (int) $recoveryFee->getAmount(),
            (int) $interestPayable->getAmount(),
            $daysOverdue,
            $referenceDate,
        );
    }

    public function recoveryFee(): Money
    {
        return new Money($this->recoveryFee, $this->request->currency());
    }

    public function interestPayable(): Money
    {
        return new Money($this->interestPayable, $this->request->currency());
    }

    public function totalPayable(): Money
    {
        return $this->request->amount()->add(
            $this->recoveryFee(),
            $this->interestPayable(),
        );
    }
}
