<?php

declare(strict_types=1);

namespace App\Cache\Container;

use App\Util\Assert;
use GSteel\Dot;
use Psr\Cache\CacheItemPoolInterface;
use Psr\Container\ContainerInterface;
use Redis;
use Symfony\Component\Cache\Adapter\RedisAdapter;
use Symfony\Component\Cache\Marshaller\DefaultMarshaller;

use function sprintf;

final class SymfonyRedisCacheAbstractFactory
{
    public function __invoke(ContainerInterface $container, string $cacheName): CacheItemPoolInterface
    {
        $config = $container->has('config') ? $container->get('config') : [];
        Assert::isArray($config);
        $options = Dot::array(sprintf('cache-config.%s', $cacheName), $config);
        $namespace = Dot::string('namespace', $options);
        $defaultTtl = Dot::integerDefault('default_ttl', $options, 0);

        return new RedisAdapter(
            $container->get(Redis::class),
            $namespace,
            $defaultTtl,
            new DefaultMarshaller(false)
        );
    }
}
