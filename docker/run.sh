#!/bin/sh

set -e

DATA_DIR=/srv/www
LOG_DIR=/var/log

# Check if the data directory does not exist.
if [ ! -d "$LOG_DIR/nginx" ]; then
  mkdir -p "$LOG_DIR/nginx"
fi

chown -R nginx:nginx "$LOG_DIR/nginx"

echo "Starting Nginx..."
/usr/sbin/nginx
