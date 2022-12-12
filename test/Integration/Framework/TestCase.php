<?php

declare(strict_types=1);

namespace AppTest\Integration\Framework;

use AppTest\Unit\Framework\TestCase as UnitTestCase;
use Laminas\ServiceManager\ConfigInterface;
use Laminas\ServiceManager\ServiceManager;
use Mezzio\Application;
use Mezzio\MiddlewareFactory;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

/**
 * @see ConfigInterface so that it doesn't appear unused
 *
 * @psalm-import-type ServiceManagerConfigurationType from ConfigInterface
 */
class TestCase extends UnitTestCase
{
    private static ContainerInterface|null $container;
    private static Application|null $application;

    protected static function getContainer(): ContainerInterface
    {
        if (! isset(self::$container)) {
            /** @psalm-var array<string, mixed> $config */
            $config = require __DIR__ . '/../../config/config.php';
            /** @psalm-var ServiceManagerConfigurationType */
            $dependencies = $config['dependencies'];
            unset($dependencies['services']['config']);
            $dependencies['services']['config'] = $config;

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
