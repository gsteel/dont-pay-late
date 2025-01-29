<?php
declare(strict_types=1); // phpcs:ignoreFile

use App\Env;
use AppTest\Integration\Framework\NoOpMiddleware;
use Laminas\ConfigAggregator\ConfigAggregator;
use Laminas\ServiceManager\Factory\InvokableFactory;

return [
    'debug' => false,
    ConfigAggregator::ENABLE_CACHE => false,

    'site-url' => 'http://127.0.0.1:8080',

    'redis' => [
        'port' => Env::requireInt('REDIS_PORT'),
        'host' => Env::requireString('REDIS_HOST'),
    ],

    'dependencies' => [
        'factories' => [
            Psr\Log\LoggerInterface::class => App\Log\StdOutLoggerFactory::class,
            Http\Mock\Client::class => static function () {
                return new Http\Mock\Client();
            },
            NoOpMiddleware::class => InvokableFactory::class,
        ],
        'aliases' => [
            // Stub out the error handler because it interferes with PHPUnit's Error handler
            Laminas\Stratigility\Middleware\ErrorHandler::class => NoOpMiddleware::class,
        ],
    ],
];
