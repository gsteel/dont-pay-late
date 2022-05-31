<?php

declare(strict_types=1);

namespace App\Log;

use Monolog\Logger;
use Monolog\Processor\PsrLogMessageProcessor;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;

use function assert;

final class LoggerSetupDelegator
{
    public function __invoke(ContainerInterface $container, string $serviceName, callable $service): LoggerInterface
    {
        $logger = $service();
        assert($logger instanceof Logger);
        $logger->pushProcessor(new PsrLogMessageProcessor());

        return $logger;
    }
}
