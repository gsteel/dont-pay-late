<?php

namespace App;

class ConfigProvider
{

    public function __invoke() : array
    {
        return [
            'dependencies' => [
                'invokables' => [
                ],
                'factories' => [
                    Action\HomePageAction::class  => Action\HomePageFactory::class,
                ],
            ],

            'routes' => [
                [
                    'name' => 'home',
                    'path' => '/',
                    'middleware' => Action\HomePageAction::class,
                    'allowed_methods' => ['GET'],
                ],
            ],
        ];
    }

}
