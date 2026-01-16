#!/usr/bin/env bash
set -euo pipefail

echo "Install Python dependencies"
pip install -r requirements.txt

echo "Build frontend"
cd my-app
npm ci
npm run build
cd ..

echo "Collect static files and run migrations"
python backend/manage.py collectstatic --noinput
python backend/manage.py migrate
