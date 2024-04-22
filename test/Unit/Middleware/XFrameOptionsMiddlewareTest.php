<?php

declare(strict_types=1);

namespace AppTest\Unit\Middleware;

use App\Middleware\XFrameOptionsMiddleware;
use AppTest\Unit\Framework\TestCase;
use AppTest\Unit\Framework\TestHandler;
use Laminas\Diactoros\Response\HtmlResponse;

class XFrameOptionsMiddlewareTest extends TestCase
{
    private XFrameOptionsMiddleware $middleware;
    private TestHandler $handler;

    protected function setUp(): void
    {
        $this->middleware = new XFrameOptionsMiddleware();
        $this->handler = new TestHandler(new HtmlResponse('Foo'));
    }

    public function testThatTheResponseWillHaveTheXFrameOptionsHeaderAppended(): void
    {
        $response = $this->middleware->process($this->serverRequest('/'), $this->handler);

        self::assertTrue($this->handler->didHandle());
        self::assertMessageHasHeader($response, 'X-Frame-Options', 'SAMEORIGIN');
    }
}
