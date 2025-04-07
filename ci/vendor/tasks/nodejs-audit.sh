#!/bin/bash

#! Auto synced from Shared CI Resources repository
#! Don't change this file, instead change it in github.com/blinkbitcoin/concourse-shared

set -eu

REPO_ROOT=${REPO_ROOT:-./}
LEVEL=${LEVEL:-high}

pushd ${REPO_ROOT}

set +e
if [[ -f ./yarn.lock ]]; then
  yarn audit --groups dependencies --level ${LEVEL}
elif [[ -f ./pnpm-lock.yaml ]]; then
  pnpm audit --prod --audit-level=${LEVEL}
else 
  echo "Failed audit: Unsupported PckgMgr"
  exit 2
fi

audit_return=$?
set -e

# See https://classic.yarnpkg.com/lang/en/docs/cli/audit for explanation of exit codes
if [[ ${LEVEL} == "critical" ]] && [[ ${audit_return} -ge 16 ]]; then
  exit 1
elif [[ ${LEVEL} == "high" ]] && [[ ${audit_return} -ge 8 ]]; then
  exit 1
fi
