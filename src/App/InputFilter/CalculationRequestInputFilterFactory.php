<?php

declare(strict_types=1);

namespace App\InputFilter;

use App\BaseRate\BaseRateHistory;
use Psr\Container\ContainerInterface;

final class CalculationRequestInputFilterFactory
{
    public function __invoke(ContainerInterface $container): CalculationRequestInputFilter
    {
        $list = $container->get(BaseRateHistory::class)->get();

        return new CalculationRequestInputFilter($list->earliestDate());
    }
}
