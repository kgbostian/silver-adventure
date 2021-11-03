const { find } = require('lodash');

const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
];

const resolvers = {
  Post: {
    author: (post) => find(authors, { id: post.authorId }),
  },
};

module.exports = { resolvers };
