<?php

declare(strict_types=1);

namespace App\Middleware\Container;

use App\Calculator\Calculator;
use App\InputFilter\CalculationRequestInputFilter;
use App\Middleware\CalculationMiddleware;
use Laminas\InputFilter\InputFilterPluginManager;
use Money\Currency;
use Psr\Clock\ClockInterface;
use Psr\Container\ContainerInterface;

final class CalculationMiddlewareFactory
{
    public function __invoke(ContainerInterface $container): CalculationMiddleware
    {
        $filters = $container->get(InputFilterPluginManager::class);

        return new CalculationMiddleware(
            $container->get(Calculator::class),
            $filters->get(CalculationRequestInputFilter::class),
            $container->get(Currency::class),
            $container->get(ClockInterface::class),
        );
    }
}
