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

use function assert;

final class CalculationMiddlewareFactory
{
    public function __invoke(ContainerInterface $container): CalculationMiddleware
    {
        $filters = $container->get(InputFilterPluginManager::class);
        $inputFilter = $filters->get(CalculationRequestInputFilter::class);
        assert($inputFilter instanceof CalculationRequestInputFilter);

        return new CalculationMiddleware(
            $container->get(Calculator::class),
            $inputFilter,
            $container->get(Currency::class),
            $container->get(ClockInterface::class),
        );
    }
}
