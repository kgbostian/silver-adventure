#!/bin/bash
PORT=5000
function get_users
{
  local id=$1
  curl -g \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ users{ firstName } }" }' \
  http://localhost:$PORT/graphql
}

function create_user
{
  local name="$1"
  curl -g \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "mutation { addUser( firstName:\"TestUser\") { firstName } }" }' \
  http://localhost:$PORT/graphql
}

#create_user TestUser
get_users
    
