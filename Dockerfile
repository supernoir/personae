FROM node:latest

WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "./src/index.js" ]