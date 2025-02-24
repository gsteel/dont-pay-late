<?php

declare(strict_types=1);

namespace App\Util;

use App\Exception\AssertionFailed;
use Override;
use Webmozart\Assert\Assert as WebMozartAssert;

final class Assert extends WebMozartAssert
{
    /**
     * @param string $message
     *
     * @throws AssertionFailed
     *
     * @psalm-pure
     */
    #[Override]
    protected static function reportInvalidArgument($message): never // phpcs:ignore
    {
        throw new AssertionFailed($message);
    }
}
