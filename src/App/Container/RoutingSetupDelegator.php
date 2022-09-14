<?php

declare(strict_types=1);

namespace App\Container;

use App\RouteProvider;
use App\Util\Assert;
use Mezzio\MiddlewareFactory;
use Mezzio\Router\RouteCollectorInterface;
use Psr\Container\ContainerInterface;

final class RoutingSetupDelegator
{
    public function __invoke(ContainerInterface $container, string $name, callable $callback): RouteCollectorInterface
    {
        /** @psalm-var mixed $collector */
        $collector = $callback();
        Assert::isInstanceOf($collector, RouteCollectorInterface::class);

        (new RouteProvider($collector, $container->get(MiddlewareFactory::class)))();

        return $collector;
    }
}
