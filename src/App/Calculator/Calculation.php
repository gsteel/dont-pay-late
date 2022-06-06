<?php

declare(strict_types=1);

namespace App\Calculator;

use Money\Money;

final class Calculation
{
    private function __construct(
        public readonly Request $request,
        public readonly float $interestRate,
        public readonly int $recoveryFee,
        public readonly int $interestPayable,
        public readonly int $daysOverdue
    ) {
    }

    public static function new(
        Request $request,
        float $interestRate,
        Money $recoveryFee,
        Money $interestPayable,
        int $daysOverdue
    ): self {
        return new self(
            $request,
            $interestRate,
            (int) $recoveryFee->getAmount(),
            (int) $interestPayable->getAmount(),
            $daysOverdue
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
            $this->interestPayable()
        );
    }
}
