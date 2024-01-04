#
#
#
FROM php:8.3-cli-alpine

ARG LOCAL_MODULES="bcmath ctype curl intl json libxml mbstring opcache redis sockets xmlreader"

#
# PHP Extensions
# https://github.com/mlocati/docker-php-extension-installer
#
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions $LOCAL_MODULES && \
    apk add npm

#
# NPM Deps
#
RUN npm install -g \
    autoprefixer \
    sass \
    concat \
    cssnano \
    eslint \
    eslint-config-standard \
    eslint-plugin-import \
    eslint-plugin-node \
    eslint-plugin-promise \
    npm-watch \
    postcss \
    postcss-cli \
    uglify-js

#
# PHP Configuration File
#
COPY ../docker/php-config/production.ini /usr/local/etc/php/php.ini

WORKDIR /app

#
# Copy Source
#
COPY ../ .

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
RUN composer install --optimize-autoloader
RUN npm install
