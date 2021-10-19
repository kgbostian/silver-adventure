#!/bin/bash
PORT=5000
function get_users
{
  echo "Get User"
  local id=$1
  curl -g \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ users{ firstName } }" }' \
  http://localhost:$PORT/graphql
  echo ""
  echo "***************************"
}

function get_songs
{
  echo "Get Songs"
  local id=$1
  curl -g \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ songs{ title } }" }' \
  http://localhost:$PORT/graphql
  echo ""
  echo "***************************"
}

function create_user
{
  echo " Create User"
  local name="$1"
  query='{ "query": "mutation { addUser( firstName:'\"${name}\"') { firstName } }" }'
  query2="{ \"query\": \"mutation { addUser( firstName:\"${name}\") { firstName } }\" }"
  echo $query
  echo $query2
  curl -g \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "mutation { addUser( firstName: \"Travis\") { firstName } }" }' \
  http://localhost:$PORT/graphql
  echo ""
  echo "***************************"
}


function delete_user
{
  echo "Delete User"
  local name="$1"
  curl -g \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{ "query": "mutation { removeUser( firstName: \"Travis\") { firstName } }" }' \
  http://localhost:$PORT/graphql
  echo ""
  echo "***************************"
}

create_user TestUser
get_users
delete_user
get_users
# get_songs
