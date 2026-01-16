Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Write-Host "Install Python dependencies"
pip install -r requirements.txt

Write-Host "Build frontend"
Push-Location my-app
npm ci
npm run build
Pop-Location

Write-Host "Collect static files and run migrations"
python backend/manage.py collectstatic --noinput
python backend/manage.py migrate
