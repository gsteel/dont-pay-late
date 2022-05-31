#!/bin/bash

if [ ! -d "./docker" ]
then
   echo "This command should be run from the project root"
   exit 255;
fi

set -a
. docker/.env

if [ -f docker/development.env ]
then
  . docker/development.env
fi

docker --context=default build -f docker/php-dev.dockerfile -t local/"${COMPOSE_PROJECT_NAME}":dev . &
docker --context=default build -f docker/node.dockerfile -t local/"${COMPOSE_PROJECT_NAME}"-node:dev . &

wait
