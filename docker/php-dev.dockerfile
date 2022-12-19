FROM php:8.2-fpm-alpine

ARG LOCAL_MODULES="bcmath ctype curl intl json libxml mbstring opcache redis xmlreader pcov"

# Standard Extensions
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions $LOCAL_MODULES

WORKDIR /app

#
# PHP Configuration File
#
COPY ../docker/php-config/production.ini /usr/local/etc/php/php.ini
COPY ../docker/php-config/development.ini /usr/local/etc/php/conf.d/99-development.ini

#
# Copy Source
#
COPY ../ .

#
# Composer Install
#
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
RUN composer install --optimize-autoloader

#
# Add global tools so that we can check dependencies locally
#
RUN composer global config bin-dir /usr/local/bin
RUN composer global require icanhazstring/composer-unused maglnet/composer-require-checker
