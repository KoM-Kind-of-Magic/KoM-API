FROM node:16
LABEL MAINTAINER Michael Hueter <mthueter@gmail.com>

RUN npm install pm2@latest --global --quiet && mkdir api

WORKDIR /api
COPY ["./package.json", "./package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

CMD ["npm", "run", "start"]