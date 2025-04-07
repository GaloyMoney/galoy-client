#!/bin/bash

#! Auto synced from Shared CI Resources repository
#! Don't change this file, instead change it in github.com/blinkbitcoin/concourse-shared

if [[ -z $(git config --global user.email) ]]; then
  git config --global user.email "202112752+blinkbitcoinbot@users.noreply.github.com"
fi
if [[ -z $(git config --global user.name) ]]; then
  git config --global user.name "CI blinkbitcoinbot"
fi

function unpack_deps() {
  REPO_PATH=${REPO_PATH:-repo}

  if [[ -f ${REPO_PATH}/yarn.lock ]]; then
    echo "    --> Unpacking nodejs deps... (yarn)"

    pushd ${REPO_PATH} > /dev/null

    tar -zxvf ../bundled-deps/bundled-deps-*.tgz ./node_modules/ ./yarn.lock > /dev/null

    if [[ "$(git status -s -uno)" != "" ]]; then
      echo "Extracting deps has created a diff - deps are not in sync"
      git --no-pager diff
      exit 1;
    fi

    echo "    --> Done!"

    popd
  elif [[ -f ${REPO_PATH}/pnpm-lock.yaml ]]; then
    echo "    --> Unpacking nodejs deps... (pnpm)"

    pushd ${REPO_PATH} > /dev/null

    tar -zxvf ../bundled-deps/bundled-deps-*.tgz ./node_modules/ ./pnpm-lock.yaml ./.pnpm-store > /dev/null

    if [[ "$(git status -s -uno)" != "" ]]; then
      echo "Extracting deps has created a diff - deps are not in sync"
      git --no-pager diff
      exit 1;
    fi

    echo "    --> Done!"
    popd
  else
    echo "    --> Skipping unpack deps"
  fi
}

function check_code() {
  if [[ -f ${REPO_PATH}/yarn.lock ]]; then
    echo "Checking code... (yarn)"
    yarn code:check
    echo "Done!"
  elif [[ -f ${REPO_PATH}/pnpm-lock.yaml ]]; then
    echo "    --> Checking code... (pnpm)"
    pushd ${REPO_PATH} > /dev/null
    pnpm code:check
    echo "    --> Done!"
    popd
  else 
    echo "    --> Skipping check code"
  fi
}
