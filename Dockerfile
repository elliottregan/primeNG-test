FROM node:16-alpine

WORKDIR /app

ARG FONTAWESOME_NPM_AUTH_TOKEN

COPY .npmrc ./
COPY package*.json ./
RUN npm install
RUN rm -f .npmrc

EXPOSE 4200
