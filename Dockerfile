FROM registry.tech.hextech.io/library/node:16-alpine as deps
ARG TARGETPLATFORM
ARG NPM_REGISTRY_CONFIGURATION
ARG ENVIRONMENT
ARG REGISTRY_HOST
ARG PROJECT_ID
ARG AUTH_TOKEN

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM registry.tech.hextech.io/library/node:16-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

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