const { find, merge } = require('lodash');

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


// example data
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
  },
};

const { makeExecutableSchema } = require('@graphql-tools/schema');

const {typeDef: userTypes} = require("./User/user.types");
const {resolvers: userResolvers} = require("./User/user.resolvers");
const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs: [userTypes, restOfShit],
  resolvers: merge(resolvers, userResolvers, resolvers_other),
});

module.exports = schema
