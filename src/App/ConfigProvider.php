<?php

declare(strict_types=1);

namespace App;

use DateTimeZone;
use Laminas;
use Laminas\ServiceManager\ConfigInterface;
use Lcobucci\Clock\Clock;
use Mezzio;
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
            'templates' => $this->getTemplates(),
            'view_helper_config' => [
                'doctype' => Laminas\View\Helper\Doctype::HTML5,
            ],
            'laminas-cli' => [
                'commands' => [
                    BaseRate\UpdateCommand::DEFAULT_NAME => BaseRate\UpdateCommand::class,
                ],
            ],
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
                BaseRate\UpdateCommand::class => BaseRate\Container\UpdateCommandFactory::class,
                Calculator\RecoveryFeeLookup::class => Calculator\Container\RecoveryFeeLookupFactory::class,
                Calculator\StandardCalculator::class => Calculator\Container\StandardCalculatorFactory::class,
                Log\ErrorHandlerLoggingListener::class => Log\Container\ErrorHandlerLoggingListenerFactory::class,
                Middleware\CalculationMiddleware::class => Middleware\Container\CalculationMiddlewareFactory::class,
                Middleware\TemplateRenderer::class => Middleware\Container\TemplateRendererFactory::class,
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
                Mezzio\Router\RouteCollectorInterface::class => Mezzio\Router\RouteCollector::class,
            ],
            'delegators' => [
                Laminas\Stratigility\Middleware\ErrorHandler::class => [
                    Log\Container\ErrorHandlerDelegator::class,
                ],
                Mezzio\Router\RouteCollector::class => [
                    Container\RoutingSetupDelegator::class,
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

    /** @return array<string, mixed> */
    public function getTemplates(): array
    {
        return [
            'map' => [
                /** Page Templates */
                'page::home' => __DIR__ . '/../../templates/pages/home.phtml',
                'page::about' => __DIR__ . '/../../templates/pages/about.phtml',

                /** Layouts */
                'layout::default' => __DIR__ . '/../../templates/layout/layout.phtml',

                /** Default Mezzio Error Templates */
                'error::404' => __DIR__ . '/../../templates/error/404.phtml',
                'error::error' => __DIR__ . '/../../templates/error/error.phtml',
            ],
        ];
    }
}
