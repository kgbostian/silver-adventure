const { typeDef: Author } = require('./author/author.types');
const { resolvers: authorResolvers } = require('./author/author.resolvers');
const { typeDef: Post } = require('./post/post.types');
const { resolvers: postResolvers } = require('./post/post.resolvers');
const { find, merge } = require('lodash');

const typeDefs = /* GraphQL */ `
  # the schema allows the following query:
  type Query {
    posts: [Post]
    author(id: Int!): Author
  }

  # this schema allows the following mutation:
  type Mutation {
    upvotePost(postId: Int!): Post
  }
`;

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

const resolvers = {
  Query: {
    posts: () => posts,
    author: (_, { id }) => find(authors, { id }),
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

    // createAuthor: (_, { firstName, lastName }) => {
    //   if (!firstName || !lastName) {
    //     throw new Error(`A first name and last name must be provided`);
    //   }

    //   id = posts.at(-1).id + 1;
    //   newAuthor = { id, firstName, lastName };
    //   posts.push(newAuthor);
    //   console.log(posts);

    //   return newAuthor;
    // },
  },

  // Author: {
  //   posts: (author) => filter(posts, { authorId: author.id }),
  // },

  // Post: {
  //   author: (post) => find(authors, { id: post.authorId }),
  // },
};

const { makeExecutableSchema } = require('@graphql-tools/schema');

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, Author, Post],
  resolvers: merge(resolvers, authorResolvers, postResolvers),
});

module.exports = { schema };
