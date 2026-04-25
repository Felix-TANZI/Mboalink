# ============================================================
#  Stage 1 — Dépendances
# ============================================================
FROM node:22-alpine AS deps
WORKDIR /app

# Installer les dépendances natives nécessaires à SWC
RUN apk add --no-cache libc6-compat

COPY package.json ./

# On installe AUSSI @next/swc ici pour qu'il soit dans node_modules
# et éviter le téléchargement réseau pendant le build
RUN npm install --frozen-lockfile || npm install

# ============================================================
#  Stage 2 — Build
# ============================================================
FROM node:22-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
# Désactive le téléchargement SWC à la volée — utilise celui de node_modules
ENV NEXT_SKIP_BINARY_DOWNLOAD=1

RUN npm run build

# ============================================================
#  Stage 3 — Runner (image finale, légère)
# ============================================================
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser  --system --uid 1001 nextjs

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
