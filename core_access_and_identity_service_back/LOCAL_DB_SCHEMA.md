# Schéma rapide: PostgreSQL local avec Docker Compose

```
[Host Machine]
      |
      |  docker compose up
      v
+-----------------------------+
| Docker Network (compose)    |
|                             |
|  +----------------------+   |
|  | mboalink-backend     |   |
|  | (Node.js API)        |   |
|  | DATABASE_URL ->      |   |
|  | postgresql://...     |   |
|  +----------+-----------+   |
|             |               |
|             v               |
|  +----------------------+   |
|  | postgres             |   |
|  | (PostgreSQL 16)       |   |
|  | DB: mboalink_local    |   |
|  +----------+-----------+   |
|             |               |
+-------------+---------------+
              |
              v
        Docker Volume
          pg_data
```

## Points clés
- Le backend parle à Postgres via le **nom du service** `postgres`.
- Les données persistent dans le volume Docker `pg_data`.
- Tu peux changer l’URL dans `.env` pour basculer entre Aiven et local.

## URL locale à utiliser
`postgresql://postgres:postgres@postgres:5432/mboalink_local?schema=public`
