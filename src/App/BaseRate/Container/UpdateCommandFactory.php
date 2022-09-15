<?php

declare(strict_types=1);

namespace App\BaseRate\Container;

use App\BaseRate\BaseRateHistory;
use App\BaseRate\UpdateCommand;
use Psr\Container\ContainerInterface;

final class UpdateCommandFactory
{
    public function __invoke(ContainerInterface $container): UpdateCommand
    {
        return new UpdateCommand($container->get(BaseRateHistory::class));
    }
}
