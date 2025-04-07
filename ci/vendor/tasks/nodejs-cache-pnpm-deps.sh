#!/bin/bash

set -eu

tar_out="$(pwd)/bundled-deps"

pushd deps
# Install dependencies
echo "    --> pnpm install --store-dir .pnpm-store"
pnpm install --store-dir .pnpm-store # npm-store in the same directory

# Get git reference for versioning
echo "    --> git log"
git log --pretty=format:'%h' -n 1 > gitref

# Create the output filename
output_file="${tar_out}/bundled-deps-v$(cat ../deps-version/number)-$(cat gitref).tgz"

echo "    --> tar -zcf $output_file ... ."
tar -zcf "$output_file" \
    --exclude='.git' \
    --exclude='.github' \
    --exclude='ci' \
    .

echo "    --> Done!"
popd
