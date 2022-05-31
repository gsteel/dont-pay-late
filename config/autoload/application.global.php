<?php

declare(strict_types=1);

use App\Env;

return [
    'site-url' => Env::getString('SITE_URL'),
    'timezone' => 'Europe/London',
];
