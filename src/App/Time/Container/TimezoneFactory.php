<?php

declare(strict_types=1);

namespace App\Time\Container;

use App\Util\Assert;
use DateTimeZone;
use GSteel\Dot;
use Psr\Container\ContainerInterface;

use function assert;
use function is_array;

final class TimezoneFactory
{
    public function __invoke(ContainerInterface $container): DateTimeZone
    {
        $config = $container->get('config');
        assert(is_array($config));
        $timezone = Dot::string('timezone', $config);
        Assert::notEmpty($timezone);

        return new DateTimeZone($timezone);
    }
}
