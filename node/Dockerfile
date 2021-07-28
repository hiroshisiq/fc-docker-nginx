FROM node:16.5.0-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm ci

CMD [ "npm", "run", "start" ]