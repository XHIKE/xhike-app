#!/usr/bin/env sh
tsc --outFile tools/bin/tx-send.js tools/tx-cli.ts  --module 'system'
tsc --outFile tools/bin/tx-getbalance.js tools/tx-getbalance.ts --module 'system'