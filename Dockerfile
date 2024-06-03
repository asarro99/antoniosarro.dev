ARG SPOTIFY_CLIENT_ID
ARG SPOTIFY_CLIENT_SECRET
ARG SPOTIFY_REFRESH_TOKEN

FROM node:21.7.3-alpine AS base

FROM base AS deps
ARG SPOTIFY_CLIENT_ID
ARG SPOTIFY_CLIENT_SECRET
ARG SPOTIFY_REFRESH_TOKEN
RUN npm i -g pnpm@9.1.1
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
ENV HUSKY=0
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm fetch --frozen-lockfile
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile --prod

FROM base AS build
ARG SPOTIFY_CLIENT_ID
ARG SPOTIFY_CLIENT_SECRET
ARG SPOTIFY_REFRESH_TOKEN
RUN npm i -g pnpm@9.1.1
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
ENV HUSKY=0
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm fetch --frozen-lockfile
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile
COPY . .
ENV SPOTIFY_CLIENT_ID=$SPOTIFY_CLIENT_ID
ENV SPOTIFY_CLIENT_SECRET=$SPOTIFY_CLIENT_SECRET
ENV SPOTIFY_REFRESH_TOKEN=$SPOTIFY_REFRESH_TOKEN
RUN pnpm build

FROM base
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/server.js /app/server.js

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "node", "server.js" ]