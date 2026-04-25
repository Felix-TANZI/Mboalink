FROM freeradius/freeradius-server:latest

# 1. Copie notre sql.conf (driver postgresql, connexion postgres)
COPY sql.conf /etc/freeradius/mods-available/sql

# 2. Activer le module SQL via symlink
#    (l'image n'a pas ce symlink par défaut)
RUN ln -sf /etc/freeradius/mods-available/sql \
           /etc/freeradius/mods-enabled/sql

# 3. Copie nos fichiers de config pour garder un ordre d'authorize
#    deterministic: SQL d'abord, puis fallback "files".
COPY clients.conf /etc/freeradius/clients.conf
COPY users        /etc/freeradius/mods-config/files/authorize
COPY default      /etc/freeradius/sites-available/default
COPY inner-tunnel /etc/freeradius/sites-available/inner-tunnel
