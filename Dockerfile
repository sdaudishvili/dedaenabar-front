FROM node:16.13.2-alpine

RUN mkdir -p /usr/frontend-app
ENV PORT 3000

WORKDIR /usr/frontend-app

COPY ./ ./

RUN npm install

RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]