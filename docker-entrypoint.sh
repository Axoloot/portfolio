#!/bin/sh

# Obtain SSL certificates
certbot certonly --webroot --webroot-path /usr/share/nginx/html -d therealcyril.dev --non-interactive --agree-tos -m cyril_de_lajudie@hotmail.fr

# Start Nginx
nginx -g "daemon off;"
