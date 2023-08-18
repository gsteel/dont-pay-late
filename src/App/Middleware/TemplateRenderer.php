<?php

declare(strict_types=1);

namespace App\Middleware;

use App\Exception\RuntimeError;
use Laminas\Diactoros\Response\HtmlResponse;
use Mezzio\Template\TemplateRendererInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

use function is_string;

final readonly class TemplateRenderer implements MiddlewareInterface
{
    public const TEMPLATE_ATTRIBUTE = 'template';

    public function __construct(
        private TemplateRendererInterface $renderer,
    ) {
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $template = $request->getAttribute(self::TEMPLATE_ATTRIBUTE);
        if (! is_string($template) || $template === '') {
            throw new RuntimeError('A template has not been defined for this route');
        }

        return new HtmlResponse(
            $this->renderer->render($template),
            200,
        );
    }
}
