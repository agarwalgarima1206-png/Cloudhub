FROM node:18-alpine

WORKDIR /app

COPY services/messaging-service/package*.json ./

RUN npm install --production

COPY services/messaging-service/ .

COPY services/shared ./shared

EXPOSE 4004

CMD ["node", "src/index.js"]