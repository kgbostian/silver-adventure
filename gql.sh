#!/bin/bash
PORT=3000
function get_users
{
  curl -g \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ users(id:1){ firstName } }" }' \
  http://localhost:$PORT/graphql
}

function create_user
{
  curl -g \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "Mutation": "{ firstName: $1} }' \
  http://localhost:$PORT/graphql
}

#create_user TestUser
get_users 1
    
