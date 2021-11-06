
const { find } = require('lodash');


// example data
const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
];

const typeDef = `
  extend type Query {
    author(id: Int!): Author
  }  

  type Author {
    id: Int!
    firstName: String
    lastName: String
    """
    the list of Posts by this author
    """
    posts: [Post]
}`

const resolvers = {
  Query: {
    author: (_, { id }) => find(authors, { id }),
  },
  // Author: {
  //   posts: author => filter(posts, { authorId: author.id }),
  // }
};

module.exports = {typeDef, resolvers};