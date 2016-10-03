<?php

namespace App\Action;

use Interop\Container\ContainerInterface;
use Zend\Expressive\Template\TemplateRendererInterface;

class HomePageFactory
{
    public function __invoke(ContainerInterface $container) : HomePageAction
    {
        $renderer = $container->get(TemplateRendererInterface::class);

        return new HomePageAction($renderer);
    }
}
