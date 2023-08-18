<?php

declare(strict_types=1);

namespace App\Log;

use GSteel\Dot;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;

final class FileLoggerFactory
{
    use LoggerFactoryBehaviour;

    public function __invoke(ContainerInterface $container): LoggerInterface
    {
        $options = $this->loggingConfig($container);

        return new Logger($this->loggerName($container), [
            new StreamHandler(Dot::string('path', $options)),
        ]);
    }
}
