#!/bin/bash

set -eu

. pipeline-tasks/ci/vendor/tasks/nodejs-helpers.sh

unpack_deps

pushd repo

#nix develop -c pnpm test
pnpm test
