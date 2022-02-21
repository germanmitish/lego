#!/bin/bash

if [[ $NODE_ENV == 'development' ]]; then
  HOST="host: '127.0.0.1:27017',"
else
  HOST="host: 'mongo:27017'," 
fi

mongo "mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017" <<EOF
if(!rs.status().ok){
  rs.initiate({
    _id: 'rs0', 
    members: [
      {
        _id: 0, 
        $HOST 
        priority: 3
      }
    ]
  });
}else{
  print("ReplicaSet is initiated");
}
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
}else{
  print("User is created");
}
EOF
