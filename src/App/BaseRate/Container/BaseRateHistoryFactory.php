<?php

declare(strict_types=1);

namespace App\BaseRate\Container;

use App\BaseRate\BaseRateCache;
use App\BaseRate\BaseRateHistory;
use App\BaseRate\Client;
use DateInterval;
use Psr\Container\ContainerInterface;
use StellaMaris\Clock\ClockInterface;

final class BaseRateHistoryFactory
{
    public function __invoke(ContainerInterface $container): BaseRateHistory
    {
        return new BaseRateHistory(
            $container->get(BaseRateCache::class),
            $container->get(Client::class),
            $container->get(ClockInterface::class),
            new DateInterval('P7D')
        );
    }
}
