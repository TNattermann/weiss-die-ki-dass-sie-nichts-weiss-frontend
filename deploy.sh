#!/bin/bash

# Konfiguration
REMOTE_USER="n_urbansky21"
REMOTE_HOST="aalab-weiss-die-ki-dass-sie-nichts-weiss.cs.rptu.de"
REMOTE_DIR="/home/masterprojekt/frontend"
REMOTE_DIST="$REMOTE_DIR/dist"

# Lokales Build
echo "Building React project..."
npm run build || { echo "Build failed"; exit 1; }

# Upload per rsync
echo "Uploading dist/ to server..."
scp -r dist/* "$REMOTE_USER@$REMOTE_HOST:$REMOTE_DIST" || { echo "Upload failed"; exit 1; }

# Schreibrechte für Gruppe setzen auf dem Server
echo "Setting group write permissions on server..."
ssh "$REMOTE_USER@$REMOTE_HOST" "chmod -R g+w $REMOTE_DIST"

echo "✅ Deployment complete!"
