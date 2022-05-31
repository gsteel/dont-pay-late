<?php

declare(strict_types=1);

namespace App\Log;

use App\Util\Assert;
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
        $path = $options['path'] ?? null;
        Assert::string($path, 'I cannot log to a file if logging.path has not been specified');

        return new Logger($this->loggerName($container), [new StreamHandler($path)]);
    }
}
