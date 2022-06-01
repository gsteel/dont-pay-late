<?php

declare(strict_types=1);

namespace App\Container;

use App\Util\Assert;
use Laminas\Diactoros\Uri;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\UriInterface;

use function rtrim;

final class SiteUrlFactory
{
    public function __invoke(ContainerInterface $container): UriInterface
    {
        $config = $container->get('config');
        Assert::isArray($config);
        $url = $config['site-url'] ?? null;
        Assert::stringNotEmpty($url);
        $url = rtrim($url, '/');
        $uri = new Uri($url);
        Assert::isEmpty($uri->getPath(), 'This website is intended to run at the root domain name, not under a path.');

        return $uri;
    }
}
