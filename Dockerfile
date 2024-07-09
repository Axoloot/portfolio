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

WORKDIR /var/www/html

COPY --from=build /build/build/ /usr/share/nginx/html