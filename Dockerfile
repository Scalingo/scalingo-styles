FROM node:12

COPY ./ /usr/src/app
WORKDIR /usr/src/app

RUN npm install
