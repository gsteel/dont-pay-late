<?php

declare(strict_types=1);

namespace App\Calculator;

use App\BaseRate\ChangeList;
use DateInterval;
use Money\Currency;
use Money\Money;

use function sprintf;

final class StandardCalculator implements Calculator
{
    public function __construct(
        private readonly ChangeList $rateHistory,
        private readonly float $statutoryRate,
        private readonly Currency $expectedCurrency,
        private readonly RecoveryFeeLookup $recoveryFeeLookup,
    ) {
    }

    public function calculate(Request $request): Calculation
    {
        $baseRate = $this->rateHistory->findChangeOnOrPreceding($request->dueDate);
        if (! $baseRate) {
            throw CalculationFailed::becauseBaseRateCannotBeFoundOn($request->dueDate);
        }

        if (! $request->currency()->equals($this->expectedCurrency)) {
            throw CalculationFailed::becauseCurrencyIsUnsupported($request->currency());
        }

        $terms = new DateInterval(sprintf('P%dD', $request->termsInDays));
        $dueDate = $request->dueDate->add($terms);
        if ($dueDate >= $request->now) {
            $zero = new Money(0, $this->expectedCurrency);

            return Calculation::new($request, 0.0, $zero, $zero, 0);
        }

        $days = $request->now->diff($dueDate)->days;
        $interestRate = $baseRate->rate + $this->statutoryRate;
        $recovery = $this->recoveryFeeLookup->forAmount($request->amount());
        $dailyRate = $interestRate / 365;
        $dailyAmount = $request->amount()->multiply((string) ($dailyRate / 100));
        $interestAmount = $dailyAmount->multiply($days);

        return Calculation::new($request, $interestRate, $recovery, $interestAmount, $days);
    }
}
