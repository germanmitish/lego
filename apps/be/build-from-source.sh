#!/bin/bash

# Build the containers from source when arm containers are not available
if [[ "$(docker images -q lego/server:latest 2> /dev/null)" == "" ]]; then
  echo "Building lego server"
  yarn nx deploy server
else
  echo "Lego server is already built"
fi

if [[ "$(docker images -q lego/hasura-backend-plus:latest 2> /dev/null)" == "" ]]; then
  echo "Building HBP" 
  if [ -d "dist/apps/be/hasura-backend-plus" ]; then
    rm -rf dist/apps/be/hasura-backend-plus
  fi
  git clone https://github.com/nhost/hasura-backend-plus.git --branch v2.7.1 dist/apps/be/hasura-backend-plus
  cd dist/apps/be/hasura-backend-plus
  cp docker/prod/Dockerfile Dockerfile

  sed -i -e 's/FROM node:14-alpine/FROM node:14-bullseye/g' Dockerfile

  docker build -t lego/hasura-backend-plus:latest .
  cd ..
  rm -r -f hasura-backend-plus
else
  echo "HBP is already built"
fi


