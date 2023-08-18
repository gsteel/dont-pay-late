<?php

declare(strict_types=1);

namespace AppTest\Unit\Log;

use App\Log\PapertrailLoggerFactory;
use AppTest\Unit\Framework\InMemoryContainer;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;
use Throwable;

class PapertrailLoggerFactoryTest extends TestCase
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
        (new PapertrailLoggerFactory())->__invoke($this->container);
    }

    public function testThatEmptyConfigurationIsExceptional(): void
    {
        $this->container->set('config', []);
        $this->expectException(Throwable::class);
        (new PapertrailLoggerFactory())->__invoke($this->container);
    }

    public function testLoggerCanBeCreated(): void
    {
        $this->container->set('config', ['logging' => ['papertrail' => ['port' => 1234, 'host' => 'example.com']]]);

        $logger = (new PapertrailLoggerFactory())->__invoke($this->container);
        self::assertInstanceOf(LoggerInterface::class, $logger);
    }
}
