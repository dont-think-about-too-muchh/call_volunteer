FROM node:16.4.2-alpine AS base
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./

FROM base AS dev
WORKDIR /app
ENV NODE_ENV=development
COPY src src
RUN npm ci

FROM base AS build
WORKDIR /app
COPY tsconfig.json ./
COPY src src
RUN npm run build

FROM base AS prod
WORKDIR /app
COPY ./package*.json ./
COPY --from=build /app/dist dist
RUN npm ci --only=production

USER node
EXPOSE 3000
CMD ["npm", "start"]