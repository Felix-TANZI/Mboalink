# Portail Captif Wi-Fi avec Next.js, FreeRADIUS et PostgreSQL

Ce projet met en place un portail captif d'authentification Wi-Fi pour un hôtel.
L'utilisateur saisit son identifiant client et son numéro de chambre dans une interface web
Next.js. L'application Next.js joue ensuite le rôle de client RADIUS et interroge
FreeRADIUS, qui valide les identifiants à partir des données stockées dans PostgreSQL.

## Vue d'ensemble

Le système est composé de trois briques principales :

| Composant | Rôle |
|---|---|
| Next.js | Frontend web + API backend du portail captif |
| FreeRADIUS | Serveur d'authentification RADIUS |
| PostgreSQL | Magasin de données métier et RADIUS |

Dans cette architecture :

- Le navigateur de l'utilisateur final n'est pas le NAS.
- Le NAS logique côté RADIUS est l'application Next.js.
- FreeRADIUS est le serveur AAA chargé de décider `Access-Accept` ou `Access-Reject`.
- PostgreSQL stocke à la fois les clients de l'hôtel et les tables RADIUS.

## Architecture détaillée

```text
Navigateur client
    |
    | HTTP/HTTPS
    | GET /  puis POST /api/auth
    v
Next.js (frontend + API)
    |
    | RADIUS / UDP 1812
    | Access-Request PAP
    | User-Name     = client{id} en minuscules
    | User-Password = NUMERO_CHAMBRE
    v
FreeRADIUS
    |
    | SQL / PostgreSQL 5432
    | Lecture des tables radcheck, radreply, radusergroup...
    v
PostgreSQL
```

Réponse fonctionnelle :

- Si les identifiants sont valides, FreeRADIUS renvoie `Access-Accept`.
- Si les identifiants sont invalides, FreeRADIUS renvoie `Access-Reject`.
- Après un `Access-Accept`, Next.js relit la table `clients` pour récupérer les informations à afficher et enregistre la connexion dans `connexions`.

## Qui est le NAS dans ce projet ?

En environnement RADIUS, le NAS est l'équipement ou le service qui envoie la requête
d'authentification au serveur RADIUS.

Dans ce projet, le NAS est le service Next.js.

Concrètement :

- L'utilisateur remplit le formulaire dans son navigateur.
- Le navigateur parle uniquement au frontend Next.js.
- C'est l'API Next.js qui construit et envoie le paquet RADIUS à FreeRADIUS.
- FreeRADIUS voit donc Next.js comme son client RADIUS.

Le fichier [freeradius/clients.conf](/home/jacquy-ngonga4/radius/freeradius/clients.conf:1)
autorise deux clients RADIUS :

- `localhost` : pour les tests exécutés à l'intérieur du conteneur FreeRADIUS.
- `docker_network` : pour les services du réseau Docker Compose, notamment Next.js.

## Les différents clients du système

Il faut distinguer plusieurs notions de "client" :

### 1. Client métier de l'hôtel

Ce sont les personnes hébergées dans l'hôtel.
Elles sont stockées dans la table `clients`.

Exemples fournis :

| Prénom | Nom de famille | Chambre | Username RADIUS | Password RADIUS |
|---|---|---|---|---|
| Jean-Pierre | DUPONT | 101 | `client1` | `101` |
| Marie | MARTIN | 201 | `client2` | `201` |
| Pierre | BERNARD | 301 | `client3` | `301` |
| Sophie | THOMAS | 401 | `client4` | `401` |
| Lucas | PETIT | 501 | `client5` | `501` |

### 2. Client web

C'est le navigateur de l'utilisateur qui ouvre le portail captif sur :

```text
http://localhost:3000
```

Ce client n'échange pas directement avec FreeRADIUS.

### 3. Client RADIUS / NAS

C'est l'application Next.js qui envoie les requêtes `Access-Request` à FreeRADIUS.

### 4. Client de test RADIUS

La commande `radtest` permet de simuler un NAS pour vérifier FreeRADIUS indépendamment du frontend.

## Magasin de données : PostgreSQL

PostgreSQL est le magasin de données central du projet.
Il contient deux familles de tables :

### Tables métier

- `clients` : informations des clients de l'hôtel
- `connexions` : historique des connexions validées

### Tables RADIUS

- `radcheck` : identifiants principaux des utilisateurs
- `radreply` : attributs de réponse RADIUS
- `radusergroup` : appartenance aux groupes
- `radgroupcheck` : contrôles par groupe
- `radgroupreply` : réponses par groupe
- `radacct` : accounting des sessions
- `radpostauth` : historique des tentatives d'authentification

Le schéma est initialisé par [init.sql](/home/jacquy-ngonga4/radius/init.sql:1).

## Synchronisation entre `clients` et `radcheck`

Le projet utilise un trigger PostgreSQL pour maintenir automatiquement `radcheck`
à partir des données de la table `clients`.

Règle de mapping :

| Table `clients` | Table `radcheck` |
|---|---|
| `'client' || id` | `username` |
| `numero_chambre` | `value` |
| `Cleartext-Password` | `attribute` |
| `:=` | `op` |

Cela signifie que lorsqu'un client est ajouté ou modifié :

- son identifiant RADIUS devient `client{id}` en minuscules ;
- son numéro de chambre devient son mot de passe RADIUS ;
- FreeRADIUS peut ensuite authentifier cet utilisateur via SQL.

## Flux d'authentification complet

Le flux réel du projet est le suivant :

1. L'utilisateur ouvre le portail Next.js.
2. Il saisit son `identifiantClient` et son `numeroChambre`.
3. L'API [app/api/auth/route.ts](/home/jacquy-ngonga4/radius/app/api/auth/route.ts:1) transforme ces valeurs en credentials RADIUS.
4. Next.js envoie un paquet `Access-Request` PAP à FreeRADIUS sur UDP 1812.
5. FreeRADIUS exécute le site `default` défini dans [freeradius/default](/home/jacquy-ngonga4/radius/freeradius/default:1).
6. Le module SQL lit `radcheck` dans PostgreSQL via [freeradius/sql.conf](/home/jacquy-ngonga4/radius/freeradius/sql.conf:1).
7. Si `username` et `Cleartext-Password` correspondent, FreeRADIUS renvoie `Access-Accept`.
8. Next.js relit le client dans PostgreSQL et enregistre la connexion.
9. L'utilisateur est redirigé vers la page de succès.

## Ce qui a été mis en place / corrigé

La configuration a été ajustée pour que l'architecture fonctionne de bout en bout.

### Côté FreeRADIUS

- Activation explicite du module SQL dans l'image custom.
- Utilisation du fichier `sql.conf` personnalisé pour PostgreSQL.
- Personnalisation des requêtes SQL pour utiliser les colonnes en minuscules de PostgreSQL.
- Copie des sites `default` et `inner-tunnel` du projet dans l'image.
- Ajout des sections `listen` pour :
  - `auth` sur `1812/udp`
  - `acct` sur `1813/udp`
  - `inner-tunnel` sur `127.0.0.1:18120`
- Ordre d'autorisation corrigé dans `authorize` :
  - `sql` avant `files`
  - afin que la base RADIUS soit interrogée avant tout fallback
- Neutralisation du fallback global dans `users` pour éviter de rejeter un utilisateur déjà trouvé en SQL.

### Côté Docker Compose

- Service `postgres` pour la base de données.
- Service `freeradius` pour le serveur RADIUS.
- Service `nextjs` pour le portail captif.
- Dépendances conditionnées par les `healthcheck`.
- Exposition des ports :
  - `3000/tcp` pour le frontend
  - `1812/udp` pour l'auth RADIUS
  - `1813/udp` pour l'accounting RADIUS
  - `5432/tcp` pour PostgreSQL

### Côté Next.js

- Construction manuelle d'un paquet RADIUS `Access-Request`.
- Chiffrement PAP du mot de passe côté application.
- Envoi UDP vers FreeRADIUS.
- Traitement de la réponse `Access-Accept` / `Access-Reject`.
- Lecture complémentaire en base pour récupérer le client et enregistrer la connexion.

## Moyens de connexion et protocoles utilisés

Le projet met en jeu plusieurs types de connexion.

### 1. Connexion utilisateur vers le portail

- Protocole : HTTP
- Point d'entrée : `http://localhost:3000`
- Service cible : Next.js

### 2. Connexion du NAS logique vers FreeRADIUS

- Protocole : RADIUS sur UDP
- Port : `1812`
- Service émetteur : Next.js
- Service récepteur : FreeRADIUS
- Secret partagé : `testing123`

### 3. Accounting RADIUS

- Protocole : RADIUS sur UDP
- Port : `1813`
- Utilisé par FreeRADIUS pour les traitements d'accounting

### 4. Connexion FreeRADIUS vers la base de données

- Protocole : PostgreSQL / TCP
- Port : `5432`
- Service émetteur : FreeRADIUS
- Service cible : PostgreSQL

### 5. Connexion Next.js vers la base de données

- Protocole : PostgreSQL / TCP
- Port : `5432`
- Service émetteur : Next.js
- Service cible : PostgreSQL

## Lancement du projet

Depuis la racine du dépôt :

```bash
docker compose up --build -d
```

Puis accéder au frontend :

```text
http://localhost:3000
```

## Vérification des services

Pour voir l'état des conteneurs :

```bash
docker compose ps
```

Tu dois obtenir des services `postgres`, `freeradius` et `nextjs` en cours d'exécution.

## Tester l'authentification depuis le frontend

Ouvrir le portail sur :

```text
http://localhost:3000
```

Utiliser par exemple :

- identifiant client : `client1`
- numéro de chambre : `101`

## Tester FreeRADIUS directement

Pour tester le serveur RADIUS sans passer par l'interface web :

```bash
docker compose exec freeradius radtest client1 101 127.0.0.1 0 testing123
```

Réponse attendue :

```text
Received Access-Accept
```

## Tester la base de données

Lister les identifiants RADIUS générés :

```bash
docker compose exec postgres psql -U postgres -d radius_hotel -c "
SELECT username, attribute, value FROM radcheck ORDER BY username;
"
```

Lister les clients métier :

```bash
docker compose exec postgres psql -U postgres -d radius_hotel -c "
SELECT prenom, nom_famille, numero_chambre, actif FROM clients ORDER BY nom_famille;
"
```

## Structure du projet

```text
radius/
├── app/
│   ├── api/auth/route.ts
│   ├── page.tsx
│   ├── success/page.tsx
│   └── layout.tsx
├── freeradius/
│   ├── Dockerfile
│   ├── clients.conf
│   ├── default
│   ├── inner-tunnel
│   ├── sql.conf
│   └── users
├── lib/
│   └── db.ts
├── docker-compose.yml
├── init.sql
└── README.md
```

## Variables d'environnement

### PostgreSQL

| Variable | Valeur par défaut |
|---|---|
| `POSTGRES_DB` | `radius_hotel` |
| `POSTGRES_USER` | `postgres` |
| `POSTGRES_PASSWORD` | `postgres` |

### Next.js

| Variable | Valeur par défaut |
|---|---|
| `POSTGRES_HOST` | `postgres` |
| `POSTGRES_PORT` | `5432` |
| `POSTGRES_DB` | `radius_hotel` |
| `POSTGRES_USER` | `postgres` |
| `POSTGRES_PASSWORD` | `postgres` |
| `RADIUS_HOST` | `freeradius` |
| `RADIUS_PORT` | `1812` |
| `RADIUS_SECRET` | `testing123` |

### FreeRADIUS

La configuration SQL de FreeRADIUS est embarquée dans l'image via
[freeradius/sql.conf](/home/jacquy-ngonga4/radius/freeradius/sql.conf:1).

## Résumé d'architecture

Pour résumer simplement :

- Next.js est le frontend visible par l'utilisateur.
- Next.js est aussi le NAS côté logique applicative.
- FreeRADIUS est le serveur RADIUS.
- PostgreSQL est le magasin de données central.
- Les clients de l'hôtel sont stockés dans `clients`.
- Leurs credentials RADIUS sont synchronisés dans `radcheck`.
- L'authentification réelle passe par FreeRADIUS, pas directement par Next.js.
