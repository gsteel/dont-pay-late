<?php

declare(strict_types=1);

namespace App\Middleware\Container;

use App\Middleware\TemplateRenderer;
use Mezzio\Template\TemplateRendererInterface;
use Psr\Container\ContainerInterface;

final class TemplateRendererFactory
{
    public function __invoke(ContainerInterface $container): TemplateRenderer
    {
        return new TemplateRenderer($container->get(TemplateRendererInterface::class));
    }
}
