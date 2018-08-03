#!/usr/bin/env bash

cd $(dirname $0)/..
set -x

source config

NODE_ENV="staging" node_modules/.bin/webpack-dev-server --hot --inline --open -d --port 4001 
