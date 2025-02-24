<?php

declare(strict_types=1);

namespace AppTest\Unit\Middleware;

use App\Exception\RuntimeError;
use App\Middleware\TemplateRenderer;
use AppTest\Unit\Framework\TestCase;
use AppTest\Unit\Psr7Assert;
use Mezzio\Template\TemplateRendererInterface;
use Override;
use PHPUnit\Framework\MockObject\MockObject;

final class TemplateRendererTest extends TestCase
{
    /** @var TemplateRendererInterface&MockObject */
    private TemplateRendererInterface $renderer;
    private TemplateRenderer $middleware;

    #[Override]
    protected function setUp(): void
    {
        parent::setUp();

        $this->renderer = $this->createMock(TemplateRendererInterface::class);
        $this->middleware = new TemplateRenderer($this->renderer);
    }

    public function testAnExceptionIsThrownWhenThereIsNoTemplateAttribute(): void
    {
        $this->expectException(RuntimeError::class);
        $this->middleware->process(
            $this->serverRequest('/'),
            $this->stubRequestHandler(),
        );
    }

    public function testTheTemplateWillBeRendered(): void
    {
        $this->renderer->expects(self::once())
            ->method('render')
            ->with('muppets')
            ->willReturn('Some HTML');

        $request = $this->serverRequest('/')
            ->withAttribute('template', 'muppets');

        $handler = $this->stubRequestHandler();
        $response = $this->middleware->process($request, $handler);

        self::assertFalse($handler->didHandle());
        Psr7Assert::assertResponseHasStatus($response, 200);
        $contentType = $response->getHeaderLine('Content-Type');
        self::assertStringContainsString('text/html', $contentType);
        self::assertStringContainsString('Some HTML', (string) $response->getBody());
    }
}
