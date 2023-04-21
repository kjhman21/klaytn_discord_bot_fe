#!/bin/bash
npm run build
tar -cvzf discord_bot_fe.tgz build
scp discord_bot_fe.tgz discord_bot_server: