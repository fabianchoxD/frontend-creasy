FROM node:14.17.6-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@17.0.2 -g --silent

COPY . ./
CMD ["npm", "start"]