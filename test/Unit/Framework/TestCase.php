<?php

declare(strict_types=1);

namespace AppTest\Unit\Framework;

use Helmich\Psr7Assert\Psr7Assertions;
use Laminas\Diactoros\Response\TextResponse;
use Laminas\Diactoros\ServerRequest;
use PHPUnit\Framework\TestCase as PHPUnitTestCase;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class TestCase extends PHPUnitTestCase
{
    use Psr7Assertions;

    protected function serverRequest(string $path, string $method = 'GET'): ServerRequestInterface
    {
        return new ServerRequest([], [], $path, $method);
    }

    protected function stubRequestHandler(?ResponseInterface $willReturn = null): TestHandler
    {
        $willReturn = $willReturn ?: new TextResponse('Text Body');

        return new TestHandler($willReturn);
    }
}
