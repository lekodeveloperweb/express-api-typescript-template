FROM node as build

WORKDIR /build

ENV PORT=3000
ENV NODE_ENV=development
ENV ORIGIN_ALLOWED=http://localhost:3000,http://localhost

COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn test && yarn build
RUN rm -rf node_modules && yarn install --production

FROM node:18.17.1-alpine

WORKDIR /api

ENV PORT=3000
ENV NODE_ENV=development
ENV ORIGIN_ALLOWED=http://localhost:3000,http://localhost

COPY --from=build /build/package.json .
COPY --from=build /build/yarn.lock .
COPY --from=build /build/dist ./dist
COPY --from=build /build/node_modules ./node_modules

EXPOSE ${PORT}
CMD ["npm", "start"]


