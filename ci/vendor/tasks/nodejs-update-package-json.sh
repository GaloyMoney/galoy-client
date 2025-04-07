#!/bin/bash

set -eu

# ----------- UPDATE REPO -----------
git config --global user.email "202112752+blinkbitcoinbot@users.noreply.github.com"
git config --global user.name "CI blinkbitcoinbot"

pushd repo

jq --arg v "$(cat ../version/version)" '.version = $v' package.json > ../tmp && mv ../tmp package.json

git add package.json
git status

if [[ "$(git status -s -uno)" != ""  ]]; then
  git commit -m "ci(release): release version $(cat ../version/version)"
fi
