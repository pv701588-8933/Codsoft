#!/bin/bash

# Build script for Quiz Maker

set -e

echo "🏗️  Building Quiz Maker Docker image..."

# Get version from package.json
VERSION=$(grep '"version"' package.json | head -1 | awk -F'"' '{print $4}')
IMAGE_NAME="quiz-maker:${VERSION}"

# Build Docker image
docker build -t "$IMAGE_NAME" -t "quiz-maker:latest" .

echo "✅ Build complete!"
echo "📦 Image: $IMAGE_NAME"
echo ""
echo "To run locally:"
echo "  docker-compose up -d"
echo ""
echo "To push to registry:"
echo "  docker push $IMAGE_NAME"
