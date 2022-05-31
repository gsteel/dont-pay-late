<?php

declare(strict_types=1);

use App\Env;

return [
    'redis' => [
        'host' => Env::requireString('REDIS_HOST'),
        'port' => Env::requireInt('REDIS_PORT'),
    ],
];
