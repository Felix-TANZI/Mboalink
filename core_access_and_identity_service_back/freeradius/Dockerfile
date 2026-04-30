FROM freeradius/freeradius-server:latest

RUN apt-get update -y && apt-get install -y --no-install-recommends netcat-openbsd && rm -rf /var/lib/apt/lists/*

COPY sql.conf /etc/freeradius/mods-available/sql
RUN ln -sf /etc/freeradius/mods-available/sql /etc/freeradius/mods-enabled/sql

COPY clients.conf /etc/freeradius/clients.conf
COPY users /etc/freeradius/mods-config/files/authorize
COPY default /etc/freeradius/sites-available/default
COPY inner-tunnel /etc/freeradius/sites-available/inner-tunnel
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 1812/udp
EXPOSE 1813/udp

CMD ["/docker-entrypoint.sh"]
