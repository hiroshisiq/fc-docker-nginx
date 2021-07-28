FROM node:16.5.0-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm ci

EXPOSE 3000

CMD [ "npm", "run", "start" ]