# Run `make` (no arguments) to get a short description of what is available
# within this `Makefile`.

DOCKER_ENV=-f docker/docker-compose.yml --env-file=docker/.env --env-file=docker/development.env

help: ## shows this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_\-\.]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
.PHONY: help

docker-running: ## Fire up the stack if it is not running
ifeq ($(shell docker compose $(DOCKER_ENV) ps --filter status=running --format=json),)
	make up
endif
.PHONY: docker-running

docker-build: ## rebuild docker containers
	docker/build-development-images.sh
.PHONY: docker-build

up: ## Startup docker environment
	docker compose $(DOCKER_ENV) up -d
.PHONY: up

down: ## Shutdown docker environment
	docker compose $(DOCKER_ENV) down
.PHONY: down

autoload: docker-running ## Dump the composer autoloader
	docker compose $(DOCKER_ENV) exec php composer dump-autoload --strict-psr --optimize
.PHONY: autoload

qa: autoload cs sa tests deps ## Run all QA checks

tests: docker-running ## run tests (containers must be up)
	time -p docker compose $(DOCKER_ENV) exec php php -d xdebug.mode=off ./vendor/bin/phpunit
.PHONY: tests

composer-update: docker-running ## Update composer deps
	docker compose $(DOCKER_ENV) exec php composer update
.PHONY: composer-update

composer-bump: docker-running ## Bump composer deps
	docker compose $(DOCKER_ENV) exec php composer bump
.PHONY: composer-bump

bump: composer-update composer-bump composer-update ## Bump and update composer deps

sa: docker-running ## Run static analysis
	docker compose $(DOCKER_ENV) exec php php -d xdebug.mode=off vendor/bin/psalm --no-cache
.PHONY: sa

sa-update-baseline: ## Update SA Baseline removing fixed issues
	php -dxdebug.mode=off vendor/bin/psalm --no-cache --update-baseline
.PHONY: sa-update-baseline

sa-set-baseline: ## Baseline outstanding SA Issues
	php -dxdebug.mode=off vendor/bin/psalm --no-cache --set-baseline=psalm-baseline.xml
.PHONY: sa-set-baseline

cs: docker-running ## verify coding standards
	docker compose $(DOCKER_ENV) exec php php -d xdebug.mode=off vendor/bin/phpcs
.PHONY:cs

csfix: docker-running ## auto-fix coding standard rules, where possible
	docker compose $(DOCKER_ENV) exec php php -d xdebug.mode=off vendor/bin/phpcbf
.PHONY: fix-code-style

get-require-checker: ## Download a Phar of composer-require-checker
ifeq (,$(wildcard ./vendor/bin/composer-require-checker))
	curl -LsS https://github.com/maglnet/ComposerRequireChecker/releases/download/4.14.0/composer-require-checker.phar -o vendor/bin/composer-require-checker
	chmod +x vendor/bin/composer-require-checker
endif
.PHONY: get-require-checker

deps: docker-running get-require-checker ## check for un-declared dependencies
	docker compose $(DOCKER_ENV) exec php php -d xdebug.mode=off -f vendor/bin/composer-require-checker -- check
.PHONY: deps

dev-mode-disable: docker-running ## Disable "development mode"
	docker compose $(DOCKER_ENV) exec --workdir=/app php /app/vendor/bin/laminas-development-mode disable;
.PHONY: dev-mode-disable

dev-mode-enable: docker-running ## Enable "development mode"
	docker compose $(DOCKER_ENV) exec --workdir=/app php /app/vendor/bin/laminas-development-mode enable;
.PHONY: dev-mode-disable
