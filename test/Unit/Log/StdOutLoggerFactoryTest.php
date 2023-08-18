<?php

declare(strict_types=1);

namespace AppTest\Unit\Log;

use App\Log\StdOutLoggerFactory;
use AppTest\Unit\Framework\InMemoryContainer;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;
use Throwable;

class StdOutLoggerFactoryTest extends TestCase
{
    private InMemoryContainer $container;

    protected function setUp(): void
    {
        parent::setUp();

        $this->container = new InMemoryContainer();
    }

    public function testThatMissingConfigurationIsExceptional(): void
    {
        $this->expectException(Throwable::class);
        (new StdOutLoggerFactory())->__invoke($this->container);
    }

    public function testLoggerCanBeCreatedWithEmptyConfig(): void
    {
        $this->container->set('config', ['logging' => []]);

        $logger = (new StdOutLoggerFactory())->__invoke($this->container);
        self::assertInstanceOf(LoggerInterface::class, $logger);
    }
}
