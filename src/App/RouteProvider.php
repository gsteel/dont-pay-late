<?php

declare(strict_types=1);

namespace App;

use App\Middleware\CalculationMiddleware;
use App\Middleware\TemplateRenderer;
use Fig\Http\Message\RequestMethodInterface as RM;
use Mezzio\MiddlewareFactory;
use Mezzio\Router\RouteCollectorInterface;

final readonly class RouteProvider
{
    public const ROUTE_CALCULATE = 'calculate';
    public const ROUTE_HOME = 'home';
    public const ROUTE_ABOUT = 'about';

    public function __construct(
        private RouteCollectorInterface $collector,
        private MiddlewareFactory $factory,
    ) {
    }

    public function __invoke(): void
    {
        $home = $this->collector->get(
            '/',
            $this->factory->prepare(TemplateRenderer::class),
            self::ROUTE_HOME,
        );
        $home->setOptions([
            'defaults' => [
                'template' => 'page::home',
            ],
        ]);

        $about = $this->collector->get(
            '/about',
            $this->factory->prepare(TemplateRenderer::class),
            self::ROUTE_ABOUT,
        );
        $about->setOptions([
            'defaults' => [
                'template' => 'page::about',
            ],
        ]);

        $this->collector->route(
            '/calculate',
            $this->factory->prepare(CalculationMiddleware::class),
            [RM::METHOD_POST, RM::METHOD_GET],
            self::ROUTE_CALCULATE,
        );
    }
}
