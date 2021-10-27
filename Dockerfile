FROM node:16-alpine

WORKDIR /app

COPY .env ./
COPY .npmrc ./
COPY package*.json ./
RUN npm install

EXPOSE 4200
