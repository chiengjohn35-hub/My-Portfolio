#!/bin/sh
set -e

# Run Django migrations and collectstatic at container start so runtime env vars are available.
if [ -f backend/manage.py ]; then
  echo "Running migrations..."
  python backend/manage.py migrate --noinput || true
  echo "Collecting static files..."
  python backend/manage.py collectstatic --noinput || true
fi

# Exec the container CMD (should be gunicorn)
exec "$@"
