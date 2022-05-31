<?php
declare(strict_types=1); // phpcs:ignoreFile

use App\Env;
use Laminas\ConfigAggregator\ConfigAggregator;

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
        ],
    ],
];
