<?php

declare(strict_types=1);

namespace App\Container;

use App\Util\Assert;
use GSteel\Dot;
use Psr\Container\ContainerInterface;
use Redis;

final class RedisClientFactory
{
    public function __invoke(ContainerInterface $container): Redis
    {
        $config = $container->has('config') ? $container->get('config') : [];
        Assert::isArray($config);

        $client = new Redis();
        $client->connect(
            Dot::stringDefault('redis.host', $config, 'localhost'),
            Dot::integerDefault('redis.port', $config, 6379),
            Dot::floatDefault('redis.timeout', $config, 0.0)
        );
        $client->select(Dot::integerDefault('redis.dbindex', $config, 0));

        return $client;
    }
}
