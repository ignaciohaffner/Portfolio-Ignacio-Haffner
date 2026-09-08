FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Vite inlines VITE_* at build time; passed as a build arg from docker-compose.
ARG VITE_ADMIN_UIDS=""
ENV VITE_ADMIN_UIDS=$VITE_ADMIN_UIDS
RUN npm run build

FROM nginx:alpine AS runtime
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
