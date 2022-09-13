<?php

declare(strict_types=1);

namespace AppTest\Unit\Calculator;

use App\Calculator\RecoveryFeeLookup;
use Money\Currency;
use Money\Money;
use PHPUnit\Framework\TestCase;

class RecoveryFeeLookupTest extends TestCase
{
    private RecoveryFeeLookup $lookup;

    protected function setUp(): void
    {
        parent::setUp();
        $this->lookup = new RecoveryFeeLookup(new Currency('GBP'));
    }

    public function testRecoveryFeeIsFortyQuid(): void
    {
        self::assertEquals(4000, $this->lookup->forAmount(
            new Money(50000, new Currency('GBP')),
        )->getAmount());
    }

    public function testRecoveryFeeIsSeventyQuid(): void
    {
        self::assertEquals(7000, $this->lookup->forAmount(
            new Money(500000, new Currency('GBP')),
        )->getAmount());
    }

    public function testRecoveryFeeIsAHundredQuid(): void
    {
        self::assertEquals(10000, $this->lookup->forAmount(
            new Money(1500000, new Currency('GBP')),
        )->getAmount());
    }
}
