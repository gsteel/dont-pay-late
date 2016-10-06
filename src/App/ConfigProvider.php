<?php

namespace App;
use Netglue\Money\BoeRateService;

class ConfigProvider
{

    public function __invoke() : array
    {
        return [
            'dependencies' => [
                'invokables' => [
                ],
                'factories' => [
                    Action\HomePageAction::class   => Action\HomePageFactory::class,
                    Action\CalculateAction::class  => Action\CalculateActionFactory::class,
                    BoeRateService::class          => Factory\BaseRateFactory::class,
                ],
            ],

            'routes' => [
                [
                    'name' => 'home',
                    'path' => '/',
                    'middleware' => Action\HomePageAction::class,
                    'allowed_methods' => ['GET'],
                ],
                [
                    'name' => 'calculate',
                    'path' => '/calculate',
                    'middleware' => Action\CalculateAction::class,
                    //'allowed_methods' => ['*'],
                ],
            ],
        ];
    }

}
