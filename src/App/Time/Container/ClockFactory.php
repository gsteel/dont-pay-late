<?php

declare(strict_types=1);

namespace App\Time\Container;

use DateTimeZone;
use Lcobucci\Clock\Clock;
use Lcobucci\Clock\SystemClock;
use Psr\Container\ContainerInterface;

final class ClockFactory
{
    public function __invoke(ContainerInterface $container): Clock
    {
        return new SystemClock($container->get(DateTimeZone::class));
    }
}
