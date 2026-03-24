# Mboalink Backend (Node.js MVC)

Backend Node.js/Express en architecture MVC pour couvrir les fonctionnalités du front Mboalink:
- Auth (JWT + refresh)
- Hotel manager (hotels, rooms, wifi config)
- Logins (guest pass, manual login, status sessions, cleared addresses, guest config)
- Device manager (devices, metrics, restart)
- Logs structurés (audit logs + export JSONL)
- Swagger

## Stack
- Express 5
- Prisma ORM + PostgreSQL
- Zod validation
- JWT auth
- Pino structured logging
- Swagger UI

## Structure MVC
- `src/routes` : routing global
- `src/modules/**/**.routes.js` : routes par module
- `src/modules/**/**.controller.js` : contrôleurs HTTP
- `src/modules/**/**.service.js` : logique métier
- `prisma/schema.prisma` : modèle de données

## Installation (local)
1. Copier `.env.example` vers `.env` et renseigner les valeurs.
2. Installer les dépendances:
   - `npm install`
3. Générer Prisma Client:
   - `npm run prisma:generate`
4. Créer/migrer la base:
   - `npm run prisma:migrate -- --name init`
5. (Optionnel) Créer l’admin par défaut:
   - `npm run seed:admin`
6. Lancer l'API:
   - `npm run dev`

## Installation (Docker)
1. Démarrer les conteneurs:
   - `docker compose up -d`
2. Générer Prisma et migrer la base:
   - `docker compose exec mboalink-backend npm run prisma:generate`
   - `docker compose exec mboalink-backend npm run prisma:migrate -- --name init`
3. Créer l’admin par défaut:
   - `docker compose exec mboalink-backend npm run seed:admin`
4. Logs:
   - `docker compose logs -f mboalink-backend`

## Variables d'environnement
- `DATABASE_URL` (PostgreSQL, obligatoire)
- `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`
- `ACCESS_TOKEN_TTL`, `REFRESH_TOKEN_TTL`
- `PORT` (par défaut `3000`)

### PostgreSQL local (Docker)
Si tu utilises le `docker-compose.yml` avec le service `postgres`, utilise cette valeur:\n
`DATABASE_URL=postgresql://postgres:postgres@postgres:5432/mboalink_local?schema=public`

## Endpoints principaux
- Swagger UI: `GET /api-docs`
- OpenAPI JSON: `GET /swagger.json`
- Health: `GET /health`
- API base: `/api/v1`

## Logs IA-ready
- Tous les événements importants écrivent dans `audit_logs` avec:
  - `eventType`, `entityType`, `entityId`, `action`, `severity`
  - `requestId`, `actorUserId`, `hotelId`
  - `payload` JSON
- Export JSONL pour pipelines data/IA:
  - `GET /api/v1/audit-logs/export/jsonl`
