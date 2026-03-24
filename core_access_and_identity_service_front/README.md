# Mboalink Frontend (React + Vite)

Frontend Mboalink (React + Vite). Ce guide permet à toute l’équipe de lancer le front en local ou via Docker.

## Prérequis
- Node.js 20+
- npm 9+
- (Optionnel) Docker + Docker Compose

## Installation locale
1. Copier `.env.example` vers `.env` si nécessaire.
2. Installer les dépendances:
   - `npm install`
3. Lancer le serveur de dev:
   - `npm run dev`
4. Accès:
   - `http://localhost:5173`

## Docker (recommandé pour onboarding)
### Démarrage
```bash
docker compose up --build
```

Accès:
- `http://localhost:5173`

### Variables d’environnement
Le front consomme l’API via `VITE_API_BASE_URL`.
- Par défaut dans `docker-compose.yml`: `http://localhost:3000/api/v1`

## Scripts utiles
- `npm run dev` : dev server Vite
- `npm run build` : build de production
- `npm run preview` : preview du build

## Notes
- Si le backend tourne en local sur `3000`, garde `VITE_API_BASE_URL=http://localhost:3000/api/v1`.
- En production, pointe vers l’URL publique de l’API.
