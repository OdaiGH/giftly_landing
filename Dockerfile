FROM node:22-bookworm-slim

WORKDIR /app

COPY package.json ./

RUN npm install --legacy-peer-deps --no-audit --no-fund

COPY . .

RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npx", "wrangler", "dev", "dist/server/index.js", "--config", "dist/server/wrangler.json", "--ip", "0.0.0.0", "--port", "3000"]
