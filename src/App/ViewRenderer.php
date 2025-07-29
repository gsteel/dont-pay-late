<?php

declare(strict_types=1);

namespace App;

use Laminas\View\Renderer\PhpRenderer;

/**
 * This class is only used for helper autocompletion in views
 *
 * Will be converted to an interface when View V3 is released
 *
 * @property string $content
 * @psalm-suppress UnusedClass, InvalidExtendClass
 */
final class ViewRenderer extends PhpRenderer
{
}
