#!/bin/bash
# ─────────────────────────────────────────
# Syklomics — Cloud Run Deployment Script
# Usage: bash deploy.sh YOUR_PROJECT_ID YOUR_REGION
# Example: bash deploy.sh my-gcp-project us-central1
# ─────────────────────────────────────────

PROJECT_ID=${1:-"YOUR_PROJECT_ID"}
REGION=${2:-"us-central1"}
SERVICE_NAME="syklomics-biotechnology"
IMAGE="gcr.io/$PROJECT_ID/$SERVICE_NAME"

echo "🔴 Syklomics Deployment Starting..."
echo "   Project : $PROJECT_ID"
echo "   Region  : $REGION"
echo "   Image   : $IMAGE"
echo ""

# Build and push container image
echo "📦 Building container image..."
gcloud builds submit --tag $IMAGE --project $PROJECT_ID

# Deploy to Cloud Run
echo "🚀 Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image $IMAGE \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --port 8080 \
  --memory 256Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --project $PROJECT_ID

echo ""
echo "✅ Deployment complete!"
echo "   Visit your Cloud Run console to find your live URL:"
echo "   https://console.cloud.google.com/run?project=$PROJECT_ID"
