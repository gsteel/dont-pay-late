FROM php:8.3-fpm-alpine

ARG LOCAL_MODULES="bcmath ctype curl intl json libxml mbstring opcache redis sockets xmlreader"

# Standard Extensions
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions $LOCAL_MODULES

WORKDIR /app

#
# PHP Configuration File
#
COPY ../docker/php-config/production.ini /usr/local/etc/php/php.ini

#
# Copy Source
#
COPY ../ .

#
# Composer Install
#
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
RUN composer install --optimize-autoloader
