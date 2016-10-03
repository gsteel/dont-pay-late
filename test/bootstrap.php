<?php
chdir(dirname(__DIR__));

require_once 'vendor/autoload.php';

use Zend\Expressive\ConfigManager\ConfigManager;
use Zend\Expressive\ConfigManager\PhpFileProvider;
use App\ConfigProvider;

use Zend\ServiceManager\Config;
use Zend\ServiceManager\ServiceManager;


class TestSuiteBootstrap
{

    private static $config;
    private static $container;

    public static function init()
    {
        $configManager = new ConfigManager([
            ConfigProvider::class,
            new PhpFileProvider('test/config/{{,*.}global,{,*.}local}.php'),
        ]);
        $config = $configManager->getMergedConfig();
        self::$config = new ArrayObject($config);
        self::setupContainer();
    }

    private static function setupContainer()
    {
        self::$container = new ServiceManager();
        (new Config(self::$config['dependencies']))->configureServiceManager(self::$container);

        self::$container->setService('config', self::$config);
    }

    public static function getContainer()
    {
        return self::$container;
    }

}

TestSuiteBootstrap::init();
