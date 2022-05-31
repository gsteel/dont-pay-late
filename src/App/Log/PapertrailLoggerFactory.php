<?php

declare(strict_types=1);

namespace App\Log;

use App\Util\Assert;
use Monolog\Handler\SyslogUdpHandler;
use Monolog\Logger;
use Psr\Container\ContainerInterface;

final class PapertrailLoggerFactory
{
    use LoggerFactoryBehaviour;

    public function __invoke(ContainerInterface $container): Logger
    {
        $options = $this->loggingConfig($container);
        $port = $options['papertrail']['port'] ?? null;
        $host = $options['papertrail']['host'] ?? null;

        Assert::integer($port, 'The Papertrail logger requires a port number to be defined in logging.papertrail.port');
        Assert::string($host, 'The Papertrail logger requires a host name to be defined in logging.papertrail.host');

        return new Logger($this->loggerName($container), [new SyslogUdpHandler($host, $port)]);
    }
}
