FROM node:16-alpine

WORKDIR /app

COPY .npmrc ./
COPY package*.json ./
RUN npm install

EXPOSE 4200
