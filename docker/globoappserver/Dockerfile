FROM node:14.18.1-alpine

WORKDIR '/usr/app'

COPY package.json .

RUN npm install

COPY . .

# Command for container to execute

CMD ["npm", "start"]

# ENTRYPOINT ["node","app.js"]