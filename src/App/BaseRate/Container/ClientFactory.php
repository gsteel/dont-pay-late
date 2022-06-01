<?php

declare(strict_types=1);

namespace App\BaseRate\Container;

use App\BaseRate\Client;
use DateTimeZone;
use Psr\Container\ContainerInterface;
use Psr\Http\Client\ClientInterface;
use Psr\Http\Message\RequestFactoryInterface;
use Psr\Http\Message\UriFactoryInterface;
use StellaMaris\Clock\ClockInterface;

final class ClientFactory
{
    public function __invoke(ContainerInterface $container): Client
    {
        return new Client(
            $container->get(ClientInterface::class),
            $container->get(UriFactoryInterface::class),
            $container->get(RequestFactoryInterface::class),
            $container->get(ClockInterface::class),
            new DateTimeZone('Europe/London')
        );
    }
}
