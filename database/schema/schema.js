const db = require('../models/models')

const restOfShit = /* GraphQL */`
  type Post {
    id: Int!
    title: String
    votes: Int
  }

  # the schema allows the following query:
  type Query {
    posts: [Post]
  }

  # this schema allows the following mutation:
  type Mutation {
    upvotePost (
      postId: Int!
    ): Post
  }
`;

const { find, merge } = require('lodash');

// example data
const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
];

const posts = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
  { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
];

const resolvers_other = {
  Query: {
    posts: () => posts,
  },

  Mutation: {
    upvotePost: (_, { postId }) => {
      const post = find(posts, { id: postId });
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`);
      }
      post.votes += 1;
      return post;
    },
    addUser: (_, { id }) => {
      db.models.user.create({ id, firstName:"Test", lastName:"User"})
    },

  },
};

const { makeExecutableSchema } = require('@graphql-tools/schema');

const {typeDef: Author, resolvers: authorResolvers} = require("./Author");
const {typeDef: User, resolvers: userResolvers} = require("./user_schema");
const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs: [Author, User, restOfShit],
  resolvers: merge(resolvers, resolvers_other, authorResolvers, userResolvers),
});

module.exports = schema
