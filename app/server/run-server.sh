#!/bin/bash
#

export NODE_ENV='localhost'
export PORT='3001'

# Database environment variables
# Connect to the same mysql container deployed with docker-compose 
export DB_DIALECT='mysql'
export DB_HOST='localhost'
export DB_PORT='5140'
export DB_NAME='gestorPadel'
export DB_USERNAME='userDatabase'
export DB_PASSWORD='userDatabase'

export LOG='false'

npx nodemon ./bin/www