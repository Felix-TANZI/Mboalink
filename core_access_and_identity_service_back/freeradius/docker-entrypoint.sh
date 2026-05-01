#!/bin/sh
set -e

export PGSSLMODE=disable

echo "Waiting for PostgreSQL at $DB_HOST:$DB_PORT..."
echo "DB_USER configured: ${DB_USER:+yes}"
echo "DB_NAME configured: ${DB_NAME:+yes}"
echo "DB_PASS configured: ${DB_PASS:+yes}"
until nc -z "$DB_HOST" "$DB_PORT" 2>/dev/null; do
  sleep 2
done
echo "PostgreSQL is up - starting FreeRADIUS"

exec freeradius -f -X
