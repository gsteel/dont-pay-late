<?php

declare(strict_types=1);

use Laminas\ConfigAggregator\ArrayProvider;
use Laminas\ConfigAggregator\ConfigAggregator;
use Laminas\ConfigAggregator\PhpFileProvider;

$cacheConfig = ['config_cache_path' => 'data/cache/config-cache.php'];

$aggregator = new ConfigAggregator([
    Laminas\I18n\ConfigProvider::class,
    Laminas\Form\ConfigProvider::class,
    Laminas\Hydrator\ConfigProvider::class,
    Laminas\InputFilter\ConfigProvider::class,
    Laminas\Filter\ConfigProvider::class,
    Laminas\Validator\ConfigProvider::class,
    Laminas\HttpHandlerRunner\ConfigProvider::class,
    Mezzio\LaminasView\ConfigProvider::class,
    Mezzio\Router\FastRouteRouter\ConfigProvider::class,
    Mezzio\Helper\ConfigProvider::class,
    Mezzio\ConfigProvider::class,
    Mezzio\Router\ConfigProvider::class,
    Laminas\Diactoros\ConfigProvider::class,
    new ArrayProvider($cacheConfig),
    App\ConfigProvider::class,
    new PhpFileProvider(realpath(__DIR__) . '/autoload/{{,*.}global,{,*.}local}.php'),
    new PhpFileProvider(realpath(__DIR__) . '/development.config.php'),
], $cacheConfig['config_cache_path']);

return $aggregator->getMergedConfig();
