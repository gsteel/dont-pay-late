<?php

declare(strict_types=1);

namespace AppTest\Unit\Log;

use App\Log\FileLoggerFactory;
use AppTest\Unit\Framework\InMemoryContainer;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;
use Throwable;

class FileLoggerFactoryTest extends TestCase
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
        (new FileLoggerFactory())->__invoke($this->container);
    }

    public function testThatInvalidConfigIsExceptional(): void
    {
        $this->container->set('config', ['logging' => []]);

        $this->expectException(Throwable::class);
        (new FileLoggerFactory())->__invoke($this->container);
    }

    public function testLoggerCanBeCreated(): void
    {
        $this->container->set('config', [
            'logging' => [
                'name' => 'Fred',
                'path' => __DIR__ . '/log',
            ],
        ]);

        $logger = (new FileLoggerFactory())->__invoke($this->container);
        self::assertInstanceOf(LoggerInterface::class, $logger);
    }
}
