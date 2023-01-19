const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Matchup {
    _id: ID
    tech1: String
    tech2: String
    tech1_votes: String
    tech2_votes: [String]!
  }
`;

module.exports = typeDefs;