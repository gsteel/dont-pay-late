<?php

declare(strict_types=1);

namespace App;

use App\Exception\RuntimeError;

use function getenv;
use function is_numeric;
use function sprintf;

final class Env
{
    public static function getString(string $env, ?string $default = null): ?string
    {
        $value = getenv($env);

        return empty($value) ? $default : $value;
    }

    public static function getInt(string $env, ?int $default = null): ?int
    {
        $value = getenv($env);

        return ! is_numeric($value) ? $default : (int) $value;
    }

    public static function requireString(string $env, ?string $default = null): string
    {
        $value = self::getString($env, $default);
        if (! $value) {
            throw new RuntimeError(sprintf('The environment variable "%s" has not been set', $env));
        }

        return $value;
    }

    public static function requireInt(string $env, ?int $default = null): int
    {
        $value = self::getInt($env, $default);
        if (! $value) {
            throw new RuntimeError(sprintf('The environment variable "%s" has not been set', $env));
        }

        return $value;
    }
}
