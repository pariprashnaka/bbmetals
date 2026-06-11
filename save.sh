#!/bin/bash
cd ~/Documents/bbmetals
git pull origin dev
git add .
git commit -m "dev save - $(date '+%Y-%m-%d %H:%M')"
git push origin dev
echo "✅ Saved to dev branch!"
