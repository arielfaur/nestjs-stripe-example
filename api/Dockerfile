FROM node:lts-gallium AS development

WORKDIR /usr/src/app

RUN npm i -g @nestjs/cli

COPY ./api/package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY ./api .

RUN npm run build

FROM node:lts-gallium as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./api/package*.json ./

RUN npm install --only=production

COPY ./api .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]