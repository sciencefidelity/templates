#!/bin/sh
# delete all node modules and reinstall after dependabot, runs for about 10 mins
# npx yarn-upgrade-all &&
rm -rf */node_modules &&
for d in */; do cd "$d"; yarn; cd ..; done
