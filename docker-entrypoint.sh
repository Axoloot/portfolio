#!/bin/sh

# Obtain SSL certificates if they do not exist
if [ ! -f /etc/letsencrypt/live/therealcyril.dev/fullchain.pem ]; then
    certbot certonly --webroot --webroot-path /usr/share/nginx/html -d therealcyril.dev -d www.therealcyril.dev --non-interactive --agree-tos -m cyril_de_lajudie@hotmail.fr
fi

# Bring Nginx back to the foreground
nginx -g "daemon off;"