<?php

namespace App\Factory;

use Interop\Container\ContainerInterface;

use Netglue\Money\BoeRateService;
use Netglue\Money\BoeRateClient;
use DateTime;
use DateInterval;

class BaseRateFactory
{

    private $path;

    public function __invoke(ContainerInterface $container) : BoeRateService
    {
        $config = $container->get('config');

        $dir  = isset($config['base_rate']['cache_dir']) ? $config['base_rate']['cache_dir'] : sys_get_temp_dir();
        $file = isset($config['base_rate']['file_name']) ? $config['base_rate']['file_name'] : 'base-rates.json';

        $this->path = sprintf('%s%s%s',
            $dir,
            DIRECTORY_SEPARATOR,
            $file);

        if (!is_writable($dir)) {
            throw new \InvalidArgumentException(sprintf('%s is not a writable directory', $dir));
        }

        $maxAge = isset($config['base_rate']['max_age']) ? $config['base_rate']['max_age'] : 'P30D';
        try {
            $maxAge = new DateInterval($maxAge);
        } catch (\Exception $e) {
            throw new \InvalidArgumentException('Invalid date interval spec configured for max age of cached base rates', null, $e);
        }

        $fetch = $this->shouldFetchRates($maxAge);
        return $this->getRateService($fetch);
    }

    private function shouldFetchRates(DateInterval $maxAge) : bool
    {
        $fetch = true;
        if (file_exists($this->path)) {
            $mDate = new DateTime(sprintf(
                '@%s',
                filemtime($this->path)
            ));
            $mDate->add($maxAge);
            if ($mDate > new DateTime) {
                $fetch = false;
            }
        }
        return $fetch;
    }

    private function getRateService($fetch = false) : BoeRateService
    {
        if (true === $fetch) {
            $client = new BoeRateClient;
            $rates = $client->get();
            return $this->saveRates($rates);
        }

        $json = file_get_contents($this->path);
        return BoeRateService::jsonFactory($json);
    }

    private function saveRates(array $rates) : BoeRateService
    {
        $service = new BoeRateService($rates);
        $json = $service->toJson();
        file_put_contents($this->path, $json);
        return $service;
    }
}
