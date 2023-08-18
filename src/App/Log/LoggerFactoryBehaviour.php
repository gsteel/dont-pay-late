<?php

declare(strict_types=1);

namespace App\Log;

use App\Util\Assert;
use GSteel\Dot;
use Psr\Container\ContainerInterface;

trait LoggerFactoryBehaviour
{
    private function loggerName(ContainerInterface $container): string
    {
        $options = $this->loggingConfig($container);

        return Dot::stringDefault('name', $options, 'Logger');
    }

    /** @return array<array-key, mixed> */
    private function loggingConfig(ContainerInterface $container): array
    {
        $config = $container->has('config') ? $container->get('config') : [];
        Assert::isArray($config);

        return Dot::array('logging', $config);
    }
}
