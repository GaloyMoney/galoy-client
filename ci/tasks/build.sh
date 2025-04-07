#!/bin/bash

set -eu

. pipeline-tasks/ci/vendor/tasks/nodejs-helpers.sh

unpack_deps

pushd repo

pnpm tsup
