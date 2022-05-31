<?php

declare(strict_types=1);

namespace App\Log;

use Monolog\Handler\StreamHandler;
use Monolog\Logger;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;

final class StdOutLoggerFactory
{
    use LoggerFactoryBehaviour;

    public function __invoke(ContainerInterface $container): LoggerInterface
    {
        return new Logger($this->loggerName($container), [new StreamHandler('php://stdout')]);
    }
}
