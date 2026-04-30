#!/bin/sh
set -e

export PGSSLMODE=disable

echo "Waiting for PostgreSQL at $DB_HOST:$DB_PORT..."
until nc -z "$DB_HOST" "$DB_PORT" 2>/dev/null; do
  sleep 2
done
echo "PostgreSQL is up - starting FreeRADIUS"

exec freeradius -f -X
