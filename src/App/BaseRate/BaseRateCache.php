<?php

declare(strict_types=1);

namespace App\BaseRate;

use Psr\Cache\CacheItemPoolInterface;

interface BaseRateCache extends CacheItemPoolInterface
{
    public const CACHE_KEY = 'BaseRateData';
    public const LAST_UPDATE_KEY = 'BaseLastUpdateTime';
}
