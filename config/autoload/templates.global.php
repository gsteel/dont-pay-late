<?php

return [
    'dependencies' => [
        'factories' => [
            'Zend\Expressive\FinalHandler' =>
                Zend\Expressive\Container\TemplatedErrorHandlerFactory::class,

            Zend\Expressive\Template\TemplateRendererInterface::class =>
                Zend\Expressive\ZendView\ZendViewRendererFactory::class,

            Zend\View\HelperPluginManager::class =>
                Zend\Expressive\ZendView\HelperPluginManagerFactory::class,
        ],
    ],

    'templates' => [
        'layout' => 'layout::default',
        'map' => [

            /**
             * Layout
             */
            'layout::default'  => 'templates/layout/layout.phtml',

            /**
             * HTML Pages
             */
            'app::home'        => 'templates/pages/home.phtml',
            'app::about'       => 'templates/pages/about.phtml',

            'error::error'     => 'templates/error/error.phtml',
            'error::404'       => 'templates/error/404.phtml',
        ],
    ],

    'view_helpers' => [
        // zend-servicemanager-style configuration for adding view helpers:
        // - 'aliases'
        // - 'invokables'
        // - 'factories'
        // - 'abstract_factories'
        // - etc.
    ],
];
