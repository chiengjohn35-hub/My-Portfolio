FROM python:3.11-slim

WORKDIR /app

# Install system deps (if any) and Python requirements
RUN apt-get update && apt-get install -y --no-install-recommends gcc build-essential && rm -rf /var/lib/apt/lists/*
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . /app

# Collect static files
RUN python backend/manage.py collectstatic --noinput || true

ENV PYTHONUNBUFFERED=1

# Run gunicorn from the 'backend' package
CMD ["gunicorn","backend.wsgi:application","--chdir","backend","--bind","0.0.0.0:8000","--workers","1"]
