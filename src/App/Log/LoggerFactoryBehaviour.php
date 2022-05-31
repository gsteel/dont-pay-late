<?php

declare(strict_types=1);

namespace App\Log;

use App\Util\Assert;
use Psr\Container\ContainerInterface;

trait LoggerFactoryBehaviour
{
    private function loggerName(ContainerInterface $container): string
    {
        $options = $this->loggingConfig($container);
        $name = $options['name'] ?? 'Logger';
        Assert::string($name);

        return $name;
    }

    /** @return array<array-key, mixed> */
    private function loggingConfig(ContainerInterface $container): array
    {
        $config = $container->has('config') ? $container->get('config') : [];
        Assert::isArrayAccessible($config);
        $options = $config['logging'] ?? [];
        Assert::isArray($options);

        return $options;
    }
}
