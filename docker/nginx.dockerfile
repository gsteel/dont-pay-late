FROM nginx:mainline-alpine

WORKDIR /app
COPY ../public /app/public
COPY ../docker/nginx-templates/default.conf.template /etc/nginx/templates/default.conf.template
