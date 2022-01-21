const typeDef = `
  extend type Query {
    getUserFan(id_in: Int!): UserFan
    getAllUserFans: [UserFan]
  }  

  type UserFan {
    showFavoriteArtists: Boolean
    showFavoriteSongs: Boolean
    user_id: Int
  }

  input UserFanInput {
    id: Int
    user_id: Int
  }
  
  type Mutation {
      addUserFan(firstName: String, lastName: String, username: String): User
  },
`;

module.exports = { typeDef };
