FROM node:16
LABEL MAINTAINER Michael Hueter <mthueter@gmail.com>

RUN npm install pm2@latest --global --quiet

WORKDIR /app
COPY ["./package.json", "./package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]