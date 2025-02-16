<?php

declare(strict_types=1);

namespace App\Exception;

use BadMethodCallException;

final class BadMethodCall extends BadMethodCallException implements InternalError
{
}
