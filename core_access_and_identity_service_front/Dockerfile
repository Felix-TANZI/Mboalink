FROM node:20-bullseye-slim

RUN apt-get update -y \
  && apt-get install -y --no-install-recommends dos2unix \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

COPY package*.json ./
RUN npm ci

COPY . .

RUN find . -not -path "./node_modules/*" \( -name "*.js" -o -name "*.json" -o -name "*.sh" -o -name "*.ts" -o -name "*.tsx" \) -exec dos2unix {} \; 2>/dev/null || true
RUN echo "VITE_API_BASE_URL=${VITE_API_BASE_URL}" > .env.production && cat .env.production
RUN npm run build

EXPOSE 4173

CMD ["/bin/sh", "-lc", "npm run preview -- --host 0.0.0.0 --port ${PORT:-4173}"]
