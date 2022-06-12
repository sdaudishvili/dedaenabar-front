FROM node:16.13.2-alpine as BUILDER
RUN mkdir -p /usr/frontend-app
WORKDIR /usr/frontend-app
COPY ./ ./
RUN npm install
RUN npm run build

FROM node:16.13.2-alpine
RUN mkdir -p /usr/frontend-app
WORKDIR /usr/frontend-app
COPY --from=BUILDER  /usr/frontend-app/node_modules ./node_modules
COPY --from=BUILDER  /usr/frontend-app/public ./public
COPY --from=BUILDER  /usr/frontend-app/.next ./.next
COPY --from=BUILDER  /usr/frontend-app/package.json ./
COPY --from=BUILDER  /usr/frontend-app/package-lock.json ./

EXPOSE 3000
CMD [ "npm", "start" ]