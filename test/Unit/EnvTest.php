<?php

declare(strict_types=1);

namespace AppTest\Unit;

use App\Env;
use App\Exception\RuntimeError;
use PHPUnit\Framework\TestCase;

use function putenv;

class EnvTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        putenv('LOCAL_STRING=Goats');
        putenv('LOCAL_INT=99');
    }

    public function testDefaultReturnedForStringValue(): void
    {
        self::assertEquals('foo', Env::getString('Muppets', 'foo'));
    }

    public function testDefaultReturnedForInt(): void
    {
        self::assertEquals(11, Env::getInt('Muppets', 11));
    }

    public function testNullReturnedForStringWithoutDefault(): void
    {
        self::assertNull(Env::getString('Muppets'));
    }

    public function testNullReturnedForIntWithoutDefault(): void
    {
        self::assertNull(Env::getInt('Muppets'));
    }

    public function testExceptionThrownForRequiredStringWithoutDefault(): void
    {
        $this->expectException(RuntimeError::class);
        Env::requireString('Muppets');
    }

    public function testExceptionThrownForRequiredIntWithoutDefault(): void
    {
        $this->expectException(RuntimeError::class);
        Env::requireInt('Muppets');
    }

    public function testStringCanBeRetrieved(): void
    {
        self::assertEquals('Goats', Env::requireString('LOCAL_STRING'));
        self::assertEquals(99, Env::requireInt('LOCAL_INT'));
    }
}
