<?php

namespace PHPSTORM_META {
    use Psr\Container\ContainerInterface;

    override(ContainerInterface::get(0),
        map([
            '' => '@',
            'config' => 'array',
        ])
    );
}
