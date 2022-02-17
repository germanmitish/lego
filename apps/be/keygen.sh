FILE=mongodb.key
if [ ! -f "$FILE" ]; then
    echo "Creating keyfile."
    openssl rand -base64 756 > mongodb.key
    chmod 400 mongodb.key
    chown 999:999 mongodb.key
fi
