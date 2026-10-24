FROM denoland/deno:debian-2.9.8 AS builder

# chache lume builder for future builds
WORKDIR /app
COPY deno.json deno.lock build.ts _config.ts ./
RUN deno cache build.ts _config.ts

# build site
COPY . .
RUN deno task build


# build nginx webserver
FROM nginx:1.30-alpine

EXPOSE 80

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/_site /var/www/html
