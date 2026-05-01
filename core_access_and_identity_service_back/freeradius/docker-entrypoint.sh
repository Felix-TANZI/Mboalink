#!/bin/sh
set -e

export PGSSLMODE=disable
export DB_HOST="${DB_HOST:-${POSTGRES_HOST:-postgres.railway.internal}}"
export DB_PORT="${DB_PORT:-${POSTGRES_PORT:-5432}}"
export DB_NAME="${DB_NAME:-${POSTGRES_DB:-railway}}"
export DB_USER="${DB_USER:-${POSTGRES_USER:-postgres}}"
export DB_PASS="${DB_PASS:-${POSTGRES_PASSWORD:-}}"

echo "Waiting for PostgreSQL at $DB_HOST:$DB_PORT..."
echo "DB_USER configured: ${DB_USER:+yes}"
echo "DB_NAME configured: ${DB_NAME:+yes}"
echo "DB_PASS configured: ${DB_PASS:+yes}"
echo "POSTGRES_PASSWORD configured: ${POSTGRES_PASSWORD:+yes}"
until nc -z "$DB_HOST" "$DB_PORT" 2>/dev/null; do
  sleep 2
done
echo "PostgreSQL is up - starting FreeRADIUS"

exec freeradius -f -X
