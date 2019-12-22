FROM node:12

RUN apt-get -y update
WORKDIR /var/www/app
COPY package*.json ./
RUN yarn install
COPY . .

CMD ["yarn","start"]