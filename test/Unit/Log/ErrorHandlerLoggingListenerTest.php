<?php

declare(strict_types=1);

namespace AppTest\Unit\Log;

use App\Log\ErrorHandlerLoggingListener;
use Exception;
use Laminas\Diactoros\Response\TextResponse;
use Laminas\Diactoros\ServerRequest;
use Monolog\Handler\TestHandler;
use Monolog\Level;
use Monolog\Logger;
use Monolog\LogRecord;
use PHPUnit\Framework\TestCase;

use function reset;

class ErrorHandlerLoggingListenerTest extends TestCase
{
    private TestHandler $logger;
    private ErrorHandlerLoggingListener $handler;

    protected function setUp(): void
    {
        parent::setUp();

        $this->logger = new TestHandler(Level::Debug);
        $this->handler = new ErrorHandlerLoggingListener(new Logger('Logger', [$this->logger]));
    }

    public function testThatErrorsAreLogged(): void
    {
        $exception = new Exception('Bad News', 400);
        $request = new ServerRequest([], [], 'https://example.com', 'GET');
        $response = (new TextResponse('Whatever'))->withStatus(123);
        $this->handler->__invoke($exception, $request, $response);

        $records = $this->logger->getRecords();

        self::assertCount(1, $records);
        $record = reset($records);
        self::assertInstanceOf(LogRecord::class, $record);

        self::assertSame(Level::Error, $record->level);

        self::assertStringContainsString('GET', $record->message);
        self::assertStringContainsString('https://example.com', $record->message);
        self::assertStringContainsString('123', $record->message);
        self::assertStringContainsString('Bad News', $record->message);

        $context = $record->context;
        self::assertArrayHasKey('uri', $context);
        self::assertEquals('https://example.com', $context['uri']);
        self::assertArrayHasKey('errorType', $context);
        self::assertEquals('Exception', $context['errorType']);
    }
}
