FROM node:16-alpine

WORKDIR /app

COPY .npmrc ./
COPY package*.json ./
RUN npm install --no-optional --ignore-engines

EXPOSE 4200
