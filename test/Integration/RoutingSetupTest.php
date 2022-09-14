<?php

declare(strict_types=1);

namespace AppTest\Integration;

use App\RouteProvider;
use AppTest\Integration\Framework\TestCase;
use Mezzio\Router\Route;
use Mezzio\Router\RouteCollectorInterface;

use function array_map;
use function count;

final class RoutingSetupTest extends TestCase
{
    public function testThatAKnownRouteCanBeFound(): void
    {
        $container = $this->getContainer();
        $collector = $container->get(RouteCollectorInterface::class);

        $routes = $collector->getRoutes();

        self::assertGreaterThan(0, count($routes));

        $names = array_map(static fn (Route $route): string => $route->getName(), $routes);

        self::assertContains(RouteProvider::ROUTE_CALCULATE, $names);
    }
}
