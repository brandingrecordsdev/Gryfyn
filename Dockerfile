FROM registry.tech.hextech.io/library/node:16-alpine as builder
# ARG GRPC_TOOLS_BINARY=https://metazen-development-support-singapore.s3.ap-southeast-1.amazonaws.com/ <-- Not needed here
ARG TARGETPLATFORM
ARG NPM_REGISTRY_CONFIGURATION
ARG ENVIRONMENT
ARG REGISTRY_HOST
ARG PROJECT_ID
ARG AUTH_TOKEN

WORKDIR /app

COPY package.json yarn.lock

RUN yarn

COPY . .
RUN yarn build

FROM registry.tech.hextech.io/library/nginx:1.21-alpine
ENV USR=nginx
ARG PORT=3000

RUN chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d && \
        chown -R nginx:nginx /var/run/
RUN chmod -R 777 /etc/nginx/conf.d

COPY --chown=nginx:nginx --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE $PORT