<?php

declare(strict_types=1);

namespace AppTest\Integration\Framework;

use AppTest\Unit\Framework\TestCase as UnitTestCase;
use Laminas\ServiceManager\ServiceManager;
use Mezzio\Application;
use Mezzio\MiddlewareFactory;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

/** @psalm-import-type ServiceManagerConfiguration from ServiceManager */
class TestCase extends UnitTestCase
{
    private static ContainerInterface|null $container;
    private static Application|null $application;

    protected static function getContainer(): ContainerInterface
    {
        if (! isset(self::$container)) {
            /** @psalm-var array<string, mixed> $config */
            $config = require __DIR__ . '/../../config/config.php';
            /** @psalm-var ServiceManagerConfiguration $dependencies */
            $dependencies = $config['dependencies'] ?? [];
            $dependencies['services'] = ! isset($dependencies['services'])
                ? []
                : $dependencies['services'];
            $dependencies['services']['config'] = $config;

            /** @psalm-var ServiceManagerConfiguration $dependencies */

            self::$container = new ServiceManager($dependencies);
        }

        return self::$container;
    }

    protected static function getApplication(): Application
    {
        if (! isset(self::$application)) {
            $container = self::getContainer();
            $application = $container->get(Application::class);
            $factory = $container->get(MiddlewareFactory::class);
            (require __DIR__ . '/../../../config/pipeline.php')($application, $factory, $container);
            (require __DIR__ . '/../../../config/routes.php')($application, $factory, $container);
            self::$application = $application;
        }

        return self::$application;
    }

    protected function handle(ServerRequestInterface $request): ResponseInterface
    {
        return self::getApplication()->handle($request);
    }
}
