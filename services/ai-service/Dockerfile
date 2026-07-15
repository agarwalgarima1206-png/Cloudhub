FROM node:18-alpine

WORKDIR /app

COPY services/ai-service/package*.json ./

RUN npm install --production

COPY services/ai-service/ .

EXPOSE 4005

CMD ["node", "src/index.js"]