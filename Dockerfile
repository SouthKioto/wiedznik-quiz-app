# Budowanie apki
FROM oven/bun:1 AS buidl

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . . 

RUN bun run build.ts

# serw apki na ngix
FROM ngix:alpine

COPY --from=build /app/dist /usr/share/ngix/html

EXPOSE 80


