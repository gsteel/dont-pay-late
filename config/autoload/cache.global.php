<?php

declare(strict_types=1);

return [
    'cache-config' => [
        App\BaseRate\BaseRateCache::class => [
            'namespace' => 'BaseRateCache',
            'default_ttl' => 0,
        ],
    ],
];
