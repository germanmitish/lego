#!/bin/bash

mongo "mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017" <<EOF
rs.initiate({
  _id: 'rs0', 
  members: [
    {
      _id: 0, 
      host: 'host.docker.internal:27017',
      priority: 3
    }
  ]
});
EOF

sleep 5

mongo "mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017" <<EOF
use lego
if( ! db.getUser("${USERNAME}") ){

  db.createUser(
    {
      user: "${USERNAME}",
      pwd: "${PASSWORD}",
      roles: [ { role: "readWrite", db: "lego" } ]
    }
  )
}
EOF
