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
                    Action\TemplateAction::class   => Action\TemplateActionFactory::class,
                    Action\CalculateAction::class  => Action\CalculateActionFactory::class,
                    BoeRateService::class          => Factory\BaseRateFactory::class,
                ],
            ],

            'routes' => [
                [
                    'name' => 'home',
                    'path' => '/',
                    'middleware' => Action\TemplateAction::class,
                    'allowed_methods' => ['GET'],
                    'options' => [
                        'defaults' => [
                            'template' => 'app::home',
                        ],
                    ],
                ],
                [
                    'name' => 'about',
                    'path' => '/about',
                    'middleware' => Action\TemplateAction::class,
                    'allowed_methods' => ['GET'],
                    'options' => [
                        'defaults' => [
                            'template' => 'app::about',
                        ],
                    ],
                ],
                [
                    'name' => 'calculate',
                    'path' => '/calculate',
                    'middleware' => Action\CalculateAction::class,
                    'allowed_methods' => ['POST'],
                ],
            ],
        ];
    }

}
