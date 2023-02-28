FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json .npmrc* ./
RUN npm install

COPY . .

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

CMD ["npm", "run", "start"]