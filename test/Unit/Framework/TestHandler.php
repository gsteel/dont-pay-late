<?php

declare(strict_types=1);

namespace AppTest\Unit\Framework;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

final class TestHandler implements RequestHandlerInterface
{
    private ResponseInterface $response;
    private ?ServerRequestInterface $request;

    public function __construct(ResponseInterface $response)
    {
        $this->response = $response;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $this->request = $request;

        return $this->response;
    }

    public function receivedRequest(): ?RequestInterface
    {
        return $this->request;
    }
}
