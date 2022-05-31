<?php

declare(strict_types=1);

return [
    'logging' => [
        'name' => 'DontPayLate',

        // If you want to log a local file:
        'path' => __DIR__ . '/../../data/application.log',

        // If you want to log to papertrail
        'papertrail' => [
            'port' => null,
            'host' => null,
        ],
    ],
    'dependencies' => [
        'factories' => [
            //Psr\Log\LoggerInterface::class => App\Log\FileLoggerFactory::class, // Local File Logging
            //Psr\Log\LoggerInterface::class => App\Log\PapertrailLoggerFactory::class, // Papertrail Logging
            Psr\Log\LoggerInterface::class => App\Log\StdOutLoggerFactory::class, // Log to STDOUT
        ],
        'delegators' => [
            Psr\Log\LoggerInterface::class => [
                App\Log\LoggerSetupDelegator::class,
            ],
        ],
    ],
];
