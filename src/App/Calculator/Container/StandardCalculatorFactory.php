<?php

declare(strict_types=1);

namespace App\Calculator\Container;

use App\BaseRate\BaseRateHistory;
use App\Calculator\RecoveryFeeLookup;
use App\Calculator\StandardCalculator;
use Money\Currency;
use Psr\Container\ContainerInterface;

final class StandardCalculatorFactory
{
    public function __invoke(ContainerInterface $container): StandardCalculator
    {
        return new StandardCalculator(
            $container->get(BaseRateHistory::class)->get(),
            8.0,
            $container->get(Currency::class),
            $container->get(RecoveryFeeLookup::class),
        );
    }
}
