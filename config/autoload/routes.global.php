<?php
/**
 * Nothing here - Routing setup is in App\ConfigProvider
 */
return [
    'dependencies' => [
        'invokables' => [
            Zend\Expressive\Router\RouterInterface::class => Zend\Expressive\Router\FastRouteRouter::class,
        ],
        'factories' => [

        ],
    ],
];
