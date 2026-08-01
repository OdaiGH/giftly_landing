# Wrangler's bundled Cloudflare workerd binary needs glibc at runtime.
# Use Debian slim rather than Alpine (musl) so the binary can start.
FROM node:24-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npx", "wrangler", "dev", "dist/server/index.js", "--config", "dist/server/wrangler.json", "--ip", "0.0.0.0", "--port", "3000"]
