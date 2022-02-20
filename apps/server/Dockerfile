FROM node:16-slim
ARG NODE_ENV=production

RUN apt-get update
RUN apt-get install -y openssl

WORKDIR /app
COPY ./dist/apps/server .

RUN npm install --production
RUN npx prisma generate

EXPOSE 4000

CMD ["node", "./main.js"]
