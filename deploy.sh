#!/bin/bash
# Deploy carob proposal site to Hostinger VPS
# Domain: carob.lewkai.com

set -e

SERVER="root@72.62.235.141"  # Hostinger VPS
DEPLOY_DIR="/var/www/carob.lewkai.com"

echo "Building production bundle..."
npm run build

echo "Creating deployment package (excluding cache)..."
tar -czvf deploy.tar.gz \
  --exclude='.next/cache' \
  .next/standalone \
  .next/static \
  public \
  package.json \
  next.config.mjs \
  ecosystem.config.js

echo "Uploading to server..."
scp deploy.tar.gz $SERVER:/tmp/

echo "Deploying on server..."
ssh $SERVER << 'ENDSSH'
  # Create directory
  mkdir -p /var/www/carob.lewkai.com
  cd /var/www/carob.lewkai.com

  # Backup and extract files
  rm -rf .next public 2>/dev/null || true
  tar -xzvf /tmp/deploy.tar.gz
  rm /tmp/deploy.tar.gz

  # Copy static files to standalone
  cp -r .next/static .next/standalone/.next/
  cp -r public .next/standalone/

  # Setup PM2 with standalone server
  pm2 delete carob-proposal 2>/dev/null || true
  cd .next/standalone
  PORT=3050 pm2 start server.js --name carob-proposal
  pm2 save

  echo "Deployment complete!"
ENDSSH

rm deploy.tar.gz
echo "Done! Site will be available at https://carob.lewkai.com"
