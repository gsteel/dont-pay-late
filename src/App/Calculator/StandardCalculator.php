<?php

declare(strict_types=1);

namespace App\Calculator;

use App\BaseRate\ChangeList;
use App\Util\Assert;
use DateInterval;
use DateTimeImmutable;
use Money\Currency;
use Money\Money;

use function sprintf;

final readonly class StandardCalculator implements Calculator
{
    public function __construct(
        private ChangeList $rateHistory,
        private float $statutoryRate,
        private Currency $expectedCurrency,
        private RecoveryFeeLookup $recoveryFeeLookup,
    ) {
    }

    public function calculate(Request $request): Calculation
    {
        $terms = new DateInterval(sprintf('P%dD', $request->termsInDays));
        $dueDate = $request->dueDate->add($terms);
        $referenceDate = $this->referenceDate($dueDate);

        if ($dueDate >= $request->now) {
            $zero = new Money(0, $this->expectedCurrency);

            return Calculation::new($request, 0.0, $zero, $zero, 0, $referenceDate);
        }

        $baseRate = $this->rateHistory->findChangeOnOrPreceding($referenceDate);
        if (! $baseRate) {
            throw CalculationFailed::becauseBaseRateCannotBeFoundOn($request->dueDate);
        }

        if (! $request->currency()->equals($this->expectedCurrency)) {
            throw CalculationFailed::becauseCurrencyIsUnsupported($request->currency());
        }

        $days = $request->now->diff($dueDate)->days;
        Assert::integer($days);
        $interestRate = $baseRate->rate + $this->statutoryRate;
        $recovery = $this->recoveryFeeLookup->forAmount($request->amount());
        $dailyRate = $interestRate / 365;
        $dailyAmount = $request->amount()->multiply((string) ($dailyRate / 100));
        $interestAmount = $dailyAmount->multiply($days);

        return Calculation::new($request, $interestRate, $recovery, $interestAmount, $days, $referenceDate);
    }

    /**
     * Find the BoE reference date for the 6-month period in which the debt became due
     *
     * @link https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/360834/bis-14-1116-a-users-guide-to-the-recast-late-payment-directive.pdf
     */
    private function referenceDate(DateTimeImmutable $dueDate): DateTimeImmutable
    {
        if ((int) $dueDate->format('n') <= 6) {
            return $dueDate->setDate(
                (int) $dueDate->format('Y') - 1,
                12,
                31,
            );
        }

        return $dueDate->setDate(
            (int) $dueDate->format('Y'),
            6,
            30,
        );
    }
}
