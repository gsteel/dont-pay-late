<?php

declare(strict_types=1);

namespace AppTest\Unit;

use PHPUnit\Framework\Assert;
use Psr\Http\Message\MessageInterface;
use Psr\Http\Message\ResponseInterface;

use function count;
use function sprintf;

final class Psr7Assert
{
    public static function assertMessageHasHeader(MessageInterface $message, string $header, string|null $expect = null): void
    {
        $headers = $message->getHeader($header);
        Assert::assertGreaterThanOrEqual(
            1,
            count($headers),
            sprintf(
                'Expected the message to contain the header "%s" but it was not found',
                $header,
            ),
        );

        if ($expect === null) {
            return;
        }

        Assert::assertContainsEquals(
            $expect,
            $headers,
            sprintf(
                'Expected to find a value for the header "%s" with the value "%s" but it was not found',
                $header,
                $expect,
            ),
        );
    }

    public static function assertResponseHasStatus(ResponseInterface $response, int $status): void
    {
        Assert::assertSame(
            $status,
            $response->getStatusCode(),
            sprintf(
                'Expected the response to have the status %d, but it was actually %d',
                $status,
                $response->getStatusCode(),
            ),
        );
    }

    public static function assertResponseIsSuccess(ResponseInterface $response): void
    {
        $message = sprintf(
            'Expected a successful status code between 200 and 299 but %d was received',
            $response->getStatusCode(),
        );

        Assert::assertGreaterThanOrEqual(200, $response->getStatusCode(), $message);
        Assert::assertLessThan(300, $response->getStatusCode(), $message);
    }

    public static function assertResponseIsClientError(ResponseInterface $response): void
    {
        $message = sprintf(
            'Expected a client error status code between 400 and 499 but %d was received',
            $response->getStatusCode(),
        );

        Assert::assertGreaterThanOrEqual(400, $response->getStatusCode(), $message);
        Assert::assertLessThan(500, $response->getStatusCode(), $message);
    }
}
