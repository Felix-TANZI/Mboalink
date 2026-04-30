FROM freeradius/freeradius-server:latest

COPY sql.conf /etc/freeradius/mods-available/sql
RUN ln -sf /etc/freeradius/mods-available/sql /etc/freeradius/mods-enabled/sql

COPY clients.conf /etc/freeradius/clients.conf
COPY users /etc/freeradius/mods-config/files/authorize
COPY default /etc/freeradius/sites-available/default
COPY inner-tunnel /etc/freeradius/sites-available/inner-tunnel

EXPOSE 1812/udp
EXPOSE 1813/udp

CMD ["freeradius", "-f"]
