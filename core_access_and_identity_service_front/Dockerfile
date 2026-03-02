FROM node:20-bullseye-slim

WORKDIR /app

COPY . .

EXPOSE 5173

# Full dev bootstrap inside the container
CMD ["/bin/sh", "-lc", "npm install && npm run dev -- --host 0.0.0.0 --port 5173"]
