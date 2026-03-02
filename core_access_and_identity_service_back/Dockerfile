FROM node:20-bookworm-slim

RUN apt-get update -y \
  && apt-get install -y --no-install-recommends openssl ca-certificates \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

EXPOSE 3000

# Full dev bootstrap inside the container
CMD ["/bin/sh", "-lc", "npm install && npm run prisma:generate && npm run prisma:migrate -- --name init && npm run seed:admin && npm run dev"]
