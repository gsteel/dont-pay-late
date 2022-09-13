<?php

declare(strict_types=1);

namespace AppTest\Unit\Framework;

use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

final class TestHandler implements RequestHandlerInterface
{
    private ServerRequestInterface|null $request = null;

    public function __construct(private readonly ResponseInterface $response)
    {
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $this->request = $request;

        return $this->response;
    }

    public function receivedRequest(): RequestInterface|null
    {
        return $this->request;
    }

    public function didHandle(): bool
    {
        return $this->request !== null;
    }
}
