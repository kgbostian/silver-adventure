const { filter } = require('lodash');

// const posts = [
//   { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
//   { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
//   { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
//   { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
// ];

const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
];

const resolvers = {
  Author: {
    posts: (author) => filter(posts, { authorId: author.id }),
  },
  Query: {
    allAuthors: () => {
      return authors;
    },
  },
  Mutation: {
    createAuthor: (_, { firstName, lastName }) => {
      if (!firstName || !lastName) {
        throw new Error(`A first name and last name must be provided`);
      }

      id = posts.at(-1).id + 1;
      newAuthor = { id, firstName, lastName };
      posts.push(newAuthor);
      console.log(posts);

      return newAuthor;
    },
  },
};

module.exports = { resolvers };
