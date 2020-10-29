#!/bin/bash
echo "deploying"
yarn config set registry https://registry.npm.taobao.org/
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
yarn install
yarn run build
scp -r ./build/* /usr/share/nginx/html/proxy
echo "deploy done"