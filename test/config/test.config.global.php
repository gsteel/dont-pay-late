<?php

return [
    'dependencies' => [
        'factories' => [
            Zend\Expressive\Template\TemplateRendererInterface::class =>
                Zend\Expressive\ZendView\ZendViewRendererFactory::class,
        ],
    ],

    'templates' => [
        'map' => [
            'app::home' => 'templates/pages/home.phtml',
        ],
    ],
];
