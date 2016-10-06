<?php

namespace App\Action;

use Interop\Container\ContainerInterface;
use Zend\Expressive\Template\TemplateRendererInterface;

class TemplateActionFactory
{
    public function __invoke(ContainerInterface $container) : TemplateAction
    {
        $renderer = $container->get(TemplateRendererInterface::class);

        return new TemplateAction($renderer);
    }
}
