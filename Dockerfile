FROM node:carbon

COPY ./ /usr/src/app
WORKDIR /usr/src/app

RUN npm install
