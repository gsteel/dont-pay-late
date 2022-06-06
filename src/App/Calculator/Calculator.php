<?php

declare(strict_types=1);

namespace App\Calculator;

interface Calculator
{
    /** @throws CalculationFailed */
    public function calculate(Request $request): Calculation;
}
