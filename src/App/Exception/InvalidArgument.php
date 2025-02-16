<?php

declare(strict_types=1);

namespace App\Exception;

use InvalidArgumentException;

final class InvalidArgument extends InvalidArgumentException implements InternalError
{
}
