FROM node:latest AS build
WORKDIR /build
COPY *.json ./
COPY *.mjs ./
COPY .prettierrc ./
RUN npm ci --force
COPY public/ public
COPY src/ src
RUN npm run build

FROM nginx:alpine

RUN apk add --no-cache certbot certbot-nginx openssl
WORKDIR /var/www/html
COPY --from=build /build/build/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
