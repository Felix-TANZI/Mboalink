#!/usr/bin/env bash
set -Eeuo pipefail

BACKEND_DIR="${MBOALINK_BACKEND_DIR:-/home/junior/Mboalink/core_access_and_identity_service_back}"
RADIUS_DIR="${MBOALINK_RADIUS_DIR:-/home/junior/Mboalink/radius}"
SOURCE_COMPOSE="${CAPTIVE_INSTANCES_SOURCE:-$BACKEND_DIR/docker-compose.captive-instances.yml}"
TARGET_COMPOSE="${CAPTIVE_INSTANCES_TARGET:-$RADIUS_DIR/docker-compose.captive-instances.yml}"
LOCK_FILE="${CAPTIVE_INSTANCES_LOCK_FILE:-/tmp/mboalink-captive-instances.lock}"

log() {
  printf '[mboalink-captive-instances] %s\n' "$*"
}

exec 9>"$LOCK_FILE"
if ! flock -n 9; then
  log "another deployment is already running; skipping this event"
  exit 0
fi

if [[ ! -d "$RADIUS_DIR" ]]; then
  log "radius directory not found: $RADIUS_DIR"
  exit 1
fi

if [[ ! -s "$SOURCE_COMPOSE" ]]; then
  log "generated compose file is missing or empty: $SOURCE_COMPOSE"
  exit 1
fi

if ! grep -q '^services:' "$SOURCE_COMPOSE"; then
  log "generated compose file does not look like a docker compose file: $SOURCE_COMPOSE"
  exit 1
fi

log "copying generated compose file"
install -m 0644 "$SOURCE_COMPOSE" "$TARGET_COMPOSE.tmp"
mv "$TARGET_COMPOSE.tmp" "$TARGET_COMPOSE"

cd "$RADIUS_DIR"

log "validating docker compose configuration"
docker compose -f docker-compose.yml -f docker-compose.captive-instances.yml config >/dev/null

log "applying captive portal instances"
docker compose -f docker-compose.yml -f docker-compose.captive-instances.yml up -d --build

log "current captive portal services"
docker compose -f docker-compose.yml -f docker-compose.captive-instances.yml ps
