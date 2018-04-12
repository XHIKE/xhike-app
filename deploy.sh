#!/usr/bin/env sh
cd xhike-app && git pull
cp build.zip ../
cd ../
# overwriting files without confirmation
unzip -o build.zip
rm -f build.zip
echo "DONE"
