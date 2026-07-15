FROM node:18-alpine

WORKDIR /app

COPY services/user-service/package*.json ./

RUN npm install --production

COPY services/user-service/ .

EXPOSE 4001

CMD ["node", "src/index.js"]