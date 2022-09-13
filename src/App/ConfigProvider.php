<?php

declare(strict_types=1);

namespace App;

use DateTimeZone;
use Laminas;
use Laminas\ServiceManager\ConfigInterface;
use Lcobucci\Clock\Clock;
use Money;
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
            'input_filters' => $this->inputFilters(),
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
                Calculator\RecoveryFeeLookup::class => Calculator\Container\RecoveryFeeLookupFactory::class,
                Calculator\StandardCalculator::class => Calculator\Container\StandardCalculatorFactory::class,
                Log\ErrorHandlerLoggingListener::class => Log\Container\ErrorHandlerLoggingListenerFactory::class,
                Middleware\CalculationMiddleware::class => Middleware\Container\CalculationMiddlewareFactory::class,
                Money\Currency::class => static fn (): Money\Currency => new Money\Currency('GBP'),
                Psr\Http\Client\ClientInterface::class => Container\HttpClientFactory::class,

                Clock::class => Time\Container\ClockFactory::class,
                DateTimeZone::class => Time\Container\TimezoneFactory::class,
                Redis::class => Container\RedisClientFactory::class,
                SiteUrl::class => Container\SiteUrlFactory::class,
            ],
            'aliases' => [
                Calculator\Calculator::class => Calculator\StandardCalculator::class,
                StellaMaris\Clock\ClockInterface::class => Clock::class,
            ],
            'delegators' => [
                Laminas\Stratigility\Middleware\ErrorHandler::class => [
                    Log\Container\ErrorHandlerDelegator::class,
                ],
            ],
        ];
    }

    /** @psalm-return ServiceManagerConfigurationType */
    private function inputFilters(): array
    {
        return [
            'factories' => [
                InputFilter\CalculationRequestInputFilter::class => InputFilter\CalculationRequestInputFilterFactory::class,
            ],
        ];
    }
}
