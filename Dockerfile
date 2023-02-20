FROM node:19.6.0-bullseye-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 27017

CMD ["node", "app.js"]