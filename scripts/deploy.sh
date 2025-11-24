#!/bin/bash

# Deployment script for Quiz Maker

set -e

echo "🚀 Deploying Quiz Maker..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker daemon is not running"
    exit 1
fi

# Build the image
bash scripts/build.sh

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down || true

# Start new containers
echo "🟢 Starting containers..."
docker-compose up -d

# Wait for service to be healthy
echo "⏳ Waiting for service to be ready..."
sleep 10

# Check health
if docker-compose ps | grep -q "healthy"; then
    echo "✅ Deployment successful!"
    echo ""
    echo "Application is running at: http://localhost"
else
    echo "⚠️  Service may not be ready yet"
fi
