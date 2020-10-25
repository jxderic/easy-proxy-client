#!/bin/bash
echo "deploying"
yarn config set registry https://registry.npm.taobao.org/
yarn install
yarn run build
scp -r ./build/* /usr/share/nginx/html/proxy
echo "deploy done"