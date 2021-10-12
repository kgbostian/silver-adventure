#!/bin/bash
PORT=3000
function get_users
{
  local id=$1
  curl -g \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ users(id:1){ firstName } }" }' \
  http://localhost:$PORT/graphql
}

function create_user
{
  local name="$1"
  curl -g \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{ "mutation": "{ addUsers("Kyle"){} }" }' \
  http://localhost:$PORT/graphql
}

create_user TestUser
#get_users 1
    
