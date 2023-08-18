<?php

declare(strict_types=1);

namespace App\Log;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Log\LoggerInterface;
use Throwable;

use function sprintf;

final readonly class ErrorHandlerLoggingListener
{
    public function __construct(private LoggerInterface $logger)
    {
    }

    public function __invoke(Throwable $error, ServerRequestInterface $request, ResponseInterface $response): void
    {
        $message = sprintf(
            '%s %s resulted in a %d response code: %s',
            $request->getMethod(),
            (string) $request->getUri(),
            $response->getStatusCode(),
            $error->getMessage(),
        );
        $this->logger->error($message, [
            'uri' => (string) $request->getUri(),
            'errorType' => $error::class,
        ]);
    }
}
