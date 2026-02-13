#!/bin/bash
set -e

ENV_FILE=".env.deploy"
if [ -f "$ENV_FILE" ]; then
  echo "Load configuration from $ENV_FILE"
  set -o allexport
  source "$ENV_FILE"
  set +o allexport
else
  echo "Configuration file $ENV_FILE not found!"
  exit 1
fi

echo "Remote deployment in process..."
ssh "$REMOTE_USER@$REMOTE_HOST" bash -c "'
  set -e
  cd $REMOTE_DIR
  echo \"Load new Docker image...\"
  docker load -i $IMAGE_FILE

  echo \"Recreate Docker Compose services...\"
  docker compose up -d --force-recreate

  echo \"Deployment finished!\"
'"
