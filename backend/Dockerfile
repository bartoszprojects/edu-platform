FROM node:latest

WORKDIR /app

COPY ./package*.json /app

RUN npm i -g @nestjs/cli

RUN npm install --legacy-peer-deps

COPY . /app

#CMD ["npm", "run", "start:dev"]
#
#EXPOSE 3000
