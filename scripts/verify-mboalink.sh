#!/bin/sh
set -eu

ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"

echo "== Backend tests =="
cd "$ROOT_DIR/core_access_and_identity_service_back"
npm test

echo "== Admin frontend build =="
cd "$ROOT_DIR/core_access_and_identity_service_front"
npm run build

echo "== Captive portal build =="
cd "$ROOT_DIR/radius"
npm run build

echo "MboaLink verification completed."
