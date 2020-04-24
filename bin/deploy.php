<?php
declare(strict_types=1);

$cacheDirectory = __DIR__ . '/../data/cache';
$dataDirectory = __DIR__ . '/../data';

$env = getenv('APPLICATION_ENVIRONMENT');
$env = $env ?: 'production';

printf('%s deployment routines starting up…' . PHP_EOL, ucfirst($env));
chdir(__DIR__ . '/..');
chmod($cacheDirectory, 0777);
chmod($dataDirectory, 0777);
echo 'Clearing Configuration Cache…' . PHP_EOL;
passthru('rm -f data/cache/*.php');

$composerArgs = ' --optimize-autoloader --no-progress --no-interaction --no-ansi';
$composerArgs .= $env === 'production' ? ' --no-dev' : '';
$installDeps = sprintf('composer install %s', $composerArgs);
passthru($installDeps);
