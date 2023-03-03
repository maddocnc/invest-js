#!/usr/bin/env bash
rm -rf dist
mkdir dist
./node_modules/.bin/proto-loader-gen-types \
  --longs=String \
  --enums=String \
  --defaults \
  --oneofs \
  --grpcLib=@grpc/grpc-js \
  --outDir=src/proto/ \
  investAPI/src/docs/contracts/*.proto

cp -r investAPI/src/docs/contracts dist/proto

yarn node -r ./esbuild-hook ./scripts/build
