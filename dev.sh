#!/usr/bin/env bash

project=$(basename $1)

yarn nodemon \
  --watch build.ts \
  --watch "$project" \
  --ext md \
  --ignore "$project.md" \
  --ignore "$project.html" \
  --exec "yarn build $project"
