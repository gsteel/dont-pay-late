<?php

namespace App\Action;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Zend\Diactoros\Response\HtmlResponse;
use Zend\Diactoros\Response\JsonResponse;
use Zend\Expressive\Router;
use Zend\Expressive\Template\TemplateRendererInterface;

class TemplateAction
{

    /**
     * @var TemplateRendererInterface
     */
    private $renderer;

    /**
     * @param TemplateRendererInterface $renderer
     */
    public function __construct(TemplateRendererInterface $renderer = null)
    {
        $this->renderer = $renderer;
    }

    /**
     * @param  Request  $request
     * @param  Response $response
     * @param  callable $next
     * @return HtmlResponse
     */
    public function __invoke(Request $request, Response $response, callable $next = null) : Response
    {
        $template = $request->getAttribute('template');
        if (!$template && $next !== null) {
            return $next($request, $response);
        }
        return new HtmlResponse($this->renderer->render($template));
    }
}
