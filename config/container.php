<?php
/**
 * DI Configuration Entry Point
 *
 * This file is responsible for loading all configuration and returning a
 * service manager (DI Container) instance for the application to consume
 *
 * To see how config is processed, see ./config.php
 */


use Zend\ServiceManager\Config;
use Zend\ServiceManager\ServiceManager;

// Load configuration
$config = require __DIR__ . '/config.php';

// Build container
$container = new ServiceManager();
(new Config($config['dependencies']))->configureServiceManager($container);

// Inject config
$container->setService('config', $config);

return $container;
