<?php

declare(strict_types=1);

namespace App\Calculator\Container;

use App\Calculator\RecoveryFeeLookup;
use Money\Currency;
use Psr\Container\ContainerInterface;

final class RecoveryFeeLookupFactory
{
    public function __invoke(ContainerInterface $container): RecoveryFeeLookup
    {
        return new RecoveryFeeLookup($container->get(Currency::class));
    }
}
