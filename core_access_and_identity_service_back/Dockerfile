FROM node:20-bookworm-slim

RUN apt-get update -y \
  && apt-get install -y --no-install-recommends openssl ca-certificates dos2unix \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# convertir les fins de ligne CRLF → LF (fix Windows)
RUN find . -not -path "./node_modules/*" \( -name "*.js" -o -name "*.json" -o -name "*.sh" \) -exec dos2unix {} \; 2>/dev/null || true
RUN npm run prisma:generate

EXPOSE 3000

CMD ["/bin/sh", "-lc", "npm run prisma:push && npm run seed:admin && npm start"]
