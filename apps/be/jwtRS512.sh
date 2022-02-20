#!/bin/bash

# ssh-keygen -t rsa -b 4096 -e SHA512 -f jwtRS512.key
ssh-keygen -t rsa -b 4096  -m PEM -E SHA512 -f jwtRS512.key

# Don't add passphrase
openssl rsa -in jwtRS512.key -pubout -outform PEM -out jwtRS512.key.pub

echo '

Private key for HBP
'
awk -v ORS='\\n' '1' jwtRS512.key
# cat jwtRS512.key
rm jwtRS512.key

echo '

Hasura Secret
'
awk -v ORS='\\n' '1' jwtRS512.key.pub
# cat jwtRS512.key.pub
rm jwtRS512.key.pub