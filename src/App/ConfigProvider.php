<?php

declare(strict_types=1);

namespace App;

use DateTimeZone;
use Laminas;
use Laminas\ServiceManager\ConfigInterface;
use Lcobucci\Clock\Clock;
use Psr;
use Redis;
use StellaMaris;

/**
 * @see ConfigInterface
 *
 * @psalm-import-type ServiceManagerConfigurationType from ConfigInterface
 */
final class ConfigProvider
{
    /** @return array<string, mixed> */
    public function __invoke(): array
    {
        return [
            'dependencies' => $this->dependencies(),
        ];
    }

    /** @psalm-return ServiceManagerConfigurationType */
    private function dependencies(): array
    {
        return [
            'factories' => [
                BaseRate\BaseRateCache::class => Cache\Container\SymfonyRedisCacheAbstractFactory::class,
                BaseRate\BaseRateHistory::class => BaseRate\Container\BaseRateHistoryFactory::class,
                BaseRate\Client::class => BaseRate\Container\ClientFactory::class,
                Log\ErrorHandlerLoggingListener::class => Log\Container\ErrorHandlerLoggingListenerFactory::class,
                Psr\Http\Client\ClientInterface::class => Container\HttpClientFactory::class,

                Clock::class => Time\Container\ClockFactory::class,
                DateTimeZone::class => Time\Container\TimezoneFactory::class,
                Redis::class => Container\RedisClientFactory::class,
                SiteUrl::class => Container\SiteUrlFactory::class,
            ],
            'aliases' => [
                StellaMaris\Clock\ClockInterface::class => Clock::class,
            ],
            'delegators' => [
                Laminas\Stratigility\Middleware\ErrorHandler::class => [
                    Log\Container\ErrorHandlerDelegator::class,
                ],
            ],
        ];
    }
}
