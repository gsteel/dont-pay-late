FROM php:8.3-cli-alpine

ARG LOCAL_MODULES="bcmath ctype curl intl json libxml mbstring opcache redis sockets xmlreader"

ENV SUPERCRONIC_URL=https://github.com/aptible/supercronic/releases/download/v0.1.12/supercronic-linux-amd64 \
    SUPERCRONIC=supercronic-linux-amd64 \
    SUPERCRONIC_SHA1SUM=048b95b48b708983effb2e5c935a1ef8483d9e3e

# Standard Extensions
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions $LOCAL_MODULES

#
# Install Supercronic
#
RUN curl -fsSLO "$SUPERCRONIC_URL" \
 && echo "${SUPERCRONIC_SHA1SUM}  ${SUPERCRONIC}" | sha1sum -c - \
 && chmod +x "$SUPERCRONIC" \
 && mv "$SUPERCRONIC" "/usr/local/bin/${SUPERCRONIC}" \
 && ln -s "/usr/local/bin/${SUPERCRONIC}" /usr/local/bin/supercronic

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
RUN composer install --optimize-autoloader --no-dev --no-interaction
RUN chmod 777 data/cache

#
# Copy crontab
#
COPY ../docker/crontab.txt /etc/supercronic/crontab

ENTRYPOINT ["/usr/local/bin/supercronic", "/etc/supercronic/crontab"]
