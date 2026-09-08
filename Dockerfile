# --- build the SPA -----------------------------------------------------------
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Vite inlines VITE_* at build time; passed as a build arg from docker-compose.
ARG VITE_ADMIN_UIDS=""
ENV VITE_ADMIN_UIDS=$VITE_ADMIN_UIDS
RUN npm run build

# --- runtime: tiny Node server that serves dist + injects OG tags -----------
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY server/package.json server/package-lock.json ./server/
RUN cd server && npm ci --omit=dev --no-audit --no-fund
COPY server ./server
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "server/index.js"]
