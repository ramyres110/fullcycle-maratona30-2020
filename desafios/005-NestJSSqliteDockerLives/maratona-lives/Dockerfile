FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@7.4.1

WORKDIR /home/node/app

COPY . .

RUN npm install

RUN npm run typeorm migration:run

CMD [ "npm", "start" ]
