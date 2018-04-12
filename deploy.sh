#!/usr/bin/env sh
cd xhike-app && git pull
cp build.zip ../
cd ../
unzip build.zip
echo "DONE"
rm build.zip