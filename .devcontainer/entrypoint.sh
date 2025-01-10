#!/bin/sh
set -e
chown ${WORK_USER_NAME}: /home/"$WORK_USER_NAME"/pnpm-store
chown ${WORK_USER_NAME}: /workspace/node_modules
tail -F /dev/null
