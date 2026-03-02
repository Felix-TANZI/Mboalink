# Agent Metrics (Python + Node)

Ce dossier contient deux agents (Python et Node) qui envoient des métriques vers le backend Mboalink.

## Prérequis
- Backend démarré et accessible (ex: `http://localhost:3000`).
- Un device créé dans la plateforme avec une **MAC**.
- Un token JWT valide pour l’API.

## Variables d’environnement
- `BACKEND_URL` (optionnel, défaut `http://localhost:3000`)
- `AUTH_TOKEN` (obligatoire) : token JWT
- `MAC_ADDRESS` (optionnel) : MAC d’un device enregistré
- `MAC_ADDRESSES` (optionnel) : liste de MAC séparées par virgule (prioritaire)
- `HOTEL_ID` (optionnel) : récupère automatiquement les MACs via l’API
- `DISCOVERY_REFRESH_SECONDS` (optionnel, défaut `60`) : fréquence de rafraîchissement de la liste
- `INTERVAL_SECONDS` (optionnel, défaut `30`)

## Utilisation Python
```bash
cd /home/jacquy-ngonga4/core_access_and_identity_service_back
python3 -m venv .venv
source .venv/bin/activate
pip install -r agent/requirements.txt

export AUTH_TOKEN="<JWT>"
export HOTEL_ID="hotel_cuid_here"
export DISCOVERY_REFRESH_SECONDS="300"
export BACKEND_URL="http://localhost:3000"

python3 agent/agent.py
```

## Utilisation Node
```bash
cd /home/jacquy-ngonga4/core_access_and_identity_service_back
export AUTH_TOKEN="<JWT>"
export HOTEL_ID="hotel_cuid_here"
export DISCOVERY_REFRESH_SECONDS="60"
export BACKEND_URL="http://localhost:3000"

node agent/agent.js
```

## Ce que fait l’agent
1. Récupère l’ID du device via `GET /api/v1/devices/by-mac/{macAddress}`.
2. Envoie régulièrement des métriques vers `POST /api/v1/devices/{deviceId}/metrics`.

Les métriques sont **démo** (aléatoires). Remplace la fonction `collect_metrics()` (Python) ou `collectMetrics()` (Node) par une vraie source de données (API d’équipement, SNMP, contrôleur Wi‑Fi, etc.).

## Installation sur serveur OVI
- Copier le dossier `agent/` sur le serveur.
- Installer Python ou Node selon l’agent choisi.
- Lancer l’agent en tant que service (systemd) ou via `screen/tmux`.

Exemple systemd (Python) :
```
[Unit]
Description=Mboalink Metrics Agent
After=network.target

[Service]
Environment=BACKEND_URL=http://localhost:3000
Environment=AUTH_TOKEN=<JWT>
Environment=HOTEL_ID=hotel_cuid_here
Environment=DISCOVERY_REFRESH_SECONDS=300
WorkingDirectory=/opt/mboalink
ExecStart=/opt/mboalink/.venv/bin/python /opt/mboalink/agent/agent.py
Restart=always

[Install]
WantedBy=multi-user.target
```
