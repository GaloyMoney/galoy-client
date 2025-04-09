#!/bin/bash

set -eu

# ----------- UPDATE REPO -----------
git config --global user.email "202112752+blinkbitcoinbot@users.noreply.github.com"
git config --global user.name "CI blinkbitcoinbot"

pushd repo

echo "  --> Updating package.json with new version"

jq --arg v "$(cat ../version/version)" '.version = $v' package.json > ../tmp && mv ../tmp package.json

echo -n "  --> new version in package.json: "
cat package.json | jq .version


git add package.json

echo "  --> git status:"
git status

if [[ "$(git status -s -uno)" != ""  ]]; then
  echo "  --> committing"
  git commit -m "ci(release): release version $(cat ../version/version)"
fi
