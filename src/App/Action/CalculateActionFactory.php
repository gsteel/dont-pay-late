<?php

namespace App\Action;

use Interop\Container\ContainerInterface;
use Netglue\Money\BoeRateService;

class CalculateActionFactory
{
    public function __invoke(ContainerInterface $container) : CalculateAction
    {
        $rates = $container->get(BoeRateService::class);

        return new CalculateAction($rates);
    }
}
