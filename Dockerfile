FROM node:22.3 AS build
WORKDIR /build
RUN node -v
RUN npm -v
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

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
