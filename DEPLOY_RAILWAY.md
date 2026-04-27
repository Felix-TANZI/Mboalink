# Deploiement MboaLink + FreeRADIUS

## Point important

Le portail web et l'API peuvent tourner sur Railway. Pour FreeRADIUS public, la difficulte est le protocole: RADIUS utilise UDP `1812` et `1813`, alors que Railway documente surtout l'exposition HTTP et TCP Proxy. En pratique, Railway est adapte pour une demo ou pour un FreeRADIUS appele par les services internes du projet; pour connecter un vrai routeur/NAS Wi-Fi externe vers UDP `1812`, un VPS Ubuntu reste le choix le plus fiable.

Sources verifiees le 2026-04-27:
- Railway Public Networking: https://docs.railway.com/public-networking
- Railway TCP Proxy: https://docs.railway.com/reference/tcp-proxy
- FreeRADIUS/RADIUS UDP 1812/1813: https://www.freeradius.org/documentation/freeradius-server/4.0.0/concepts/session/radius_session.html

## Services Railway conseilles

Creer un projet Railway avec 4 services:

1. `postgres`
   - Utiliser le template PostgreSQL Railway.

2. `backend`
   - Source GitHub: ce depot.
   - Root directory: `core_access_and_identity_service_back`
   - Dockerfile: `Dockerfile`
   - Variables:
     - `DATABASE_URL`: URL PostgreSQL Railway
     - `JWT_ACCESS_SECRET`: secret long
     - `JWT_REFRESH_SECRET`: secret long
     - `ACCESS_TOKEN_TTL`: `15m`
     - `REFRESH_TOKEN_TTL`: `7d`
     - `LOG_LEVEL`: `info`
     - `RADIUS_HOST`: nom interne du service FreeRADIUS
     - `RADIUS_PORT`: `1812`
     - `RADIUS_SECRET`: le meme secret que le service FreeRADIUS

3. `freeradius`
   - Source GitHub: ce depot.
   - Root directory: `core_access_and_identity_service_back/freeradius`
   - Dockerfile: `Dockerfile`
   - Variables:
     - `DB_HOST`: host PostgreSQL interne Railway
     - `DB_PORT`: `5432`
     - `DB_NAME`: nom de la base
     - `DB_USER`: utilisateur PostgreSQL
     - `DB_PASS`: mot de passe PostgreSQL
     - `RADIUS_SECRET`: secret long identique au backend
   - Ne pas compter sur une exposition publique UDP sur Railway pour la production.

4. `frontend`
   - Source GitHub: ce depot.
   - Root directory: `core_access_and_identity_service_front`
   - Dockerfile: `Dockerfile`
   - Variable de build/runtime:
     - `VITE_API_BASE_URL`: `https://URL_BACKEND_RAILWAY/api/v1`

## Test local Docker

Depuis `core_access_and_identity_service_back`:

```bash
docker compose up --build
```

Tester FreeRADIUS depuis le conteneur:

```bash
docker compose exec freeradius radtest CODEPASS CODEPASS 127.0.0.1 0 "$RADIUS_SECRET"
```

Pour exposer UDP localement sur la machine hote:

```bash
docker compose -f docker-compose.yml -f docker-compose.radius-host.yml up --build
```

## Recommandation production

Pour un vrai hotspot Wi-Fi ou un routeur externe qui doit joindre RADIUS sur UDP `1812/1813`, deployer FreeRADIUS sur un VPS avec IP publique fixe, firewall ouvert uniquement aux IP des NAS, et garder Railway pour le frontend, le backend et PostgreSQL si necessaire.
