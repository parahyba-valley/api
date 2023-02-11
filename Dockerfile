FROM node:19-alpine

RUN apk add --update --no-cache \
    build-base \
    bash \
    python3
