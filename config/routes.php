<?php

declare(strict_types=1);

use Laminas\Diactoros\Response\TextResponse;
use Mezzio\Application;
use Mezzio\MiddlewareFactory;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

/** @psalm-suppress UnusedClosureParam */
return static function (Application $app, MiddlewareFactory $factory, ContainerInterface $container): void {
    $app->get('/robots.txt', static function (ServerRequestInterface $request): ResponseInterface {
        return new TextResponse(<<<'EOF'
            User-agent: *
            Disallow:
            EOF);
    });
};
