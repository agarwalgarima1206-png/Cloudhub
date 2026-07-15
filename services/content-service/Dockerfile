FROM node:18-alpine

WORKDIR /app

COPY services/content-service/package*.json ./

RUN npm install --production

COPY services/content-service/ .

EXPOSE 4002

CMD ["node", "src/index.js"]