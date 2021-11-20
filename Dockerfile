FROM node:16-alpine

RUN echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk update && \
    apk add --no-cache \
      firefox

WORKDIR /app

ARG FONTAWESOME_NPM_AUTH_TOKEN

COPY .npmrc ./
COPY package*.json ./
RUN npm install
RUN rm -f .npmrc

EXPOSE 4200
