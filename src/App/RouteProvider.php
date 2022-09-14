<?php

declare(strict_types=1);

namespace App;

use App\Middleware\CalculationMiddleware;
use Fig\Http\Message\RequestMethodInterface as RM;
use Mezzio\MiddlewareFactory;
use Mezzio\Router\RouteCollectorInterface;

final class RouteProvider
{
    public const ROUTE_CALCULATE = 'calculate';

    public function __construct(
        private readonly RouteCollectorInterface $collector,
        private readonly MiddlewareFactory $factory,
    ) {
    }

    public function __invoke(): void
    {
        $this->collector->route(
            '/calculate',
            $this->factory->prepare(CalculationMiddleware::class),
            [RM::METHOD_POST, RM::METHOD_GET],
            self::ROUTE_CALCULATE,
        );
    }
}
