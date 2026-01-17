FROM node:20-slim AS node_builder

WORKDIR /app/my-app

# Copy frontend sources and install/build
COPY my-app/package*.json ./
COPY my-app/ ./
RUN npm ci && npm run build

FROM python:3.11-slim

ENV DEBIAN_FRONTEND=noninteractive
WORKDIR /app

# Install build deps needed for some Python packages
RUN apt-get update && apt-get install -y --no-install-recommends gcc build-essential ca-certificates && rm -rf /var/lib/apt/lists/*

# Copy Python requirements (top-level requirements.txt references backend/requirement.txt)
COPY requirements.txt ./
COPY backend/requirement.txt backend/requirement.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . /app

# Copy built frontend from node builder into the image
COPY --from=node_builder /app/my-app/dist /app/my-app/dist

# Collect static files
RUN python backend/manage.py collectstatic --noinput || true

ENV PYTHONUNBUFFERED=1

# Run gunicorn from the 'backend' package
CMD gunicorn backend.wsgi:application --chdir backend --bind 0.0.0.0:${PORT:-8000} --workers 1
