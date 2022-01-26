FROM node:14.18.1-alpine

WORKDIR '/usr/app'

COPY package.json .

RUN npm install

COPY . .

# CMD ["npm", "start"]

RUN npm run build
