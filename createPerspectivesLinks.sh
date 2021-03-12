#!/usr/bin/env bash

cd node_modules

rm -R perspectives-proxy
rm -R perspectives-core
rm -R perspectives-sharedworker

ln -s ../../perspectives-proxy perspectives-proxy
ln -s ../../perspectives-core perspectives-core
ln -s ../../perspectives-sharedworker perspectives-sharedworker

cd ..
