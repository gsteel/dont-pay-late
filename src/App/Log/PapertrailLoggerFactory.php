<?php

declare(strict_types=1);

namespace App\Log;

use GSteel\Dot;
use Monolog\Handler\SyslogUdpHandler;
use Monolog\Logger;
use Psr\Container\ContainerInterface;

final class PapertrailLoggerFactory
{
    use LoggerFactoryBehaviour;

    public function __invoke(ContainerInterface $container): Logger
    {
        $options = $this->loggingConfig($container);

        return new Logger($this->loggerName($container), [
            new SyslogUdpHandler(
                Dot::string('papertrail.host', $options),
                Dot::integer('papertrail.port', $options),
            ),
        ]);
    }
}
