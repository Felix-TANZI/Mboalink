FROM node:20-bullseye-slim

RUN apt-get update -y \
  && apt-get install -y --no-install-recommends dos2unix \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN find . -not -path "./node_modules/*" \( -name "*.js" -o -name "*.json" -o -name "*.sh" -o -name "*.ts" -o -name "*.tsx" \) -exec dos2unix {} \; 2>/dev/null || true

EXPOSE 5173

CMD ["/bin/sh", "-lc", "npm install && npm run dev -- --host 0.0.0.0 --port 5173"]