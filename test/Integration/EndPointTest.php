<?php

declare(strict_types=1);

namespace AppTest\Integration;

use AppTest\Integration\Framework\TestCase;
use AppTest\Unit\Psr7Assert;
use Fig\Http\Message\RequestMethodInterface as RM;
use Laminas\Diactoros\StreamFactory;
use Psr\Http\Message\ServerRequestInterface;

final class EndPointTest extends TestCase
{
    public function test404(): void
    {
        $response = $this->handle($this->serverRequest('/not-there'));
        Psr7Assert::assertResponseHasStatus($response, 404);
    }

    public function testHomePage(): void
    {
        $response = $this->handle($this->serverRequest('/'));
        Psr7Assert::assertResponseHasStatus($response, 200);
    }

    public function testAboutPage(): void
    {
        $response = $this->handle($this->serverRequest('/about'));
        Psr7Assert::assertResponseHasStatus($response, 200);
    }

    public function testGetRequestToCalculateIsClientError(): void
    {
        $response = $this->handle($this->serverRequest('/calculate'));
        Psr7Assert::assertResponseIsClientError($response);
    }

    private function requestWithBody(string $body): ServerRequestInterface
    {
        $stream = (new StreamFactory())->createStream($body);

        return $this->serverRequest('/calculate')
            ->withMethod(RM::METHOD_POST)
            ->withHeader('Content-Type', 'application/json')
            ->withBody($stream);
    }

    public function testPostRequestWithoutPayloadToCalculateIsClientError(): void
    {
        $response = $this->handle($this->requestWithBody(''));
        Psr7Assert::assertResponseIsClientError($response);
    }

    public function testPostRequestWithInvalidPayloadToCalculateIsClientError(): void
    {
        $response = $this->handle($this->requestWithBody('foo'));
        Psr7Assert::assertResponseIsClientError($response);
    }

    public function testPostRequestWitValidPayloadToCalculateIsSuccess(): void
    {
        $response = $this->handle($this->requestWithBody(<<<'JSON'
            {
                "dueDate": "2020-01-01",
                "termsInDays": "42",
                "amount": "123.45"
            }
            JSON));
        Psr7Assert::assertResponseIsSuccess($response);
    }
}
