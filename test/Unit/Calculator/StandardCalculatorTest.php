<?php

declare(strict_types=1);

namespace AppTest\Unit\Calculator;

use App\BaseRate\ChangeList;
use App\BaseRate\RateChange;
use App\Calculator\CalculationFailed;
use App\Calculator\RecoveryFeeLookup;
use App\Calculator\Request;
use App\Calculator\StandardCalculator;
use DateTimeImmutable;
use Money\Currency;
use Money\Money;
use PHPUnit\Framework\TestCase;

use function assert;
use function round;

class StandardCalculatorTest extends TestCase
{
    private Currency $gpb;
    private StandardCalculator $calculator;

    protected function setUp(): void
    {
        parent::setUp();
        $this->gpb = new Currency('GBP');
        $this->calculator = new StandardCalculator(
            ChangeList::fromArray([
                new RateChange(
                    self::date('2000-01-01'),
                    10.0
                ),
            ]),
            10.0,
            $this->gpb,
            new RecoveryFeeLookup($this->gpb)
        );
    }

    private static function date(string $date): DateTimeImmutable
    {
        $dt = DateTimeImmutable::createFromFormat('!Y-m-d', $date);
        assert($dt instanceof DateTimeImmutable);

        return $dt;
    }

    public function testBasicCalculation(): void
    {
        $request = Request::new(
            self::date('2020-01-01'),
            30,
            Money::GBP(50000),
            self::date('2020-02-01')
        );

        $response = $this->calculator->calculate($request);
        self::assertEquals(20.0, $response->interestRate);
        self::assertSame($request, $response->request);
        self::assertEquals(4000, $response->recoveryFee()->getAmount());
        self::assertEquals(1, $response->daysOverdue);

        $expectedFee = round(50000 * 20 / 365 / 100);
        self::assertEquals($expectedFee, $response->interestPayable()->getAmount());

        $expectedTotal = $expectedFee + 54000;
        self::assertEquals($expectedTotal, $response->totalPayable()->getAmount());
    }

    public function testCalculationProvidesZeroesWhenTheInvoiceIsNotOverdue(): void
    {
        $request = Request::new(
            self::date('2020-01-01'),
            30,
            Money::GBP(50000),
            self::date('2020-01-02')
        );

        $response = $this->calculator->calculate($request);

        self::assertEquals(50000, $response->totalPayable()->getAmount());
        self::assertEquals(0, $response->interestPayable()->getAmount());
        self::assertEquals(0, $response->recoveryFee()->getAmount());
    }

    public function testAnExceptionIsThrownWhenTheBaseRateCannotBeFound(): void
    {
        $request = Request::new(
            self::date('1984-01-01'),
            30,
            Money::GBP(50000),
            self::date('2020-01-02')
        );

        $this->expectException(CalculationFailed::class);
        $this->expectExceptionMessage(
            'A calculation cannot be made because I don’t know what the base rate was on 1st January 1984'
        );

        $this->calculator->calculate($request);
    }

    public function testAnExceptionIsThrownWhenTheInvoiceAmountIsNotInGBP(): void
    {
        $request = Request::new(
            self::date('2010-01-01'),
            30,
            Money::USD(50000),
            self::date('2020-01-02')
        );

        $this->expectException(CalculationFailed::class);
        $this->expectExceptionMessage(
            'The currency "USD" is not supported'
        );

        $this->calculator->calculate($request);
    }
}
