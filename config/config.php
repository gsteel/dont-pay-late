<?php
/**
 * We're using the ConfigManager
 * @see https://github.com/mtymek/expressive-config-manager
 *
 * Any modules or libraries that provide default configuration
 * need to be added here, in the correct order, furthermore, if
 * the module is added outside of composer, you will need to add autoloading
 * configuration to ../composer.json so that source code can be autoloaded
 */

use Zend\Expressive\ConfigManager\ConfigManager;
use Zend\Expressive\ConfigManager\PhpFileProvider;

$configManager = new ConfigManager([

    // Website Configuration
    App\ConfigProvider::class,
    new PhpFileProvider('config/autoload/{{,*.}global,{,*.}local}.php'),
]);

// Return an ArrayObject so we can inject the config as a service in Aura.Di
// and still use array checks like ``is_array``.
$config = $configManager->getMergedConfig();
return new ArrayObject($config);
