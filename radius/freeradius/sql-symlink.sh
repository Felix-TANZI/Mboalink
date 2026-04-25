#!/bin/bash
# ============================================================
#  Activation du module SQL dans FreeRADIUS
#
#  FreeRADIUS active les modules via des symlinks :
#  mods-enabled/ → mods-available/
#  Ce script crée le lien si absent, au démarrage du container.
# ============================================================
set -e

MODS_ENABLED="/etc/freeradius/3.0/mods-enabled"
MODS_AVAIL="/etc/freeradius/3.0/mods-available"

if [ ! -L "${MODS_ENABLED}/sql" ]; then
    ln -sf "${MODS_AVAIL}/sql" "${MODS_ENABLED}/sql"
    echo "[freeradius] Module SQL activé."
fi
