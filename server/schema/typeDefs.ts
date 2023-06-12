const { gql } = require("apollo-server");

const typeDefs = gql`
  type Recipe {
    id: ID!
    title: String!
    description: String!
  }
  type Query {
    recipes: [Recipe!]!
  }

  input RecipeInput {
    title: String!
    description: String!
  }

  type Mutation {
    addRecipe(input: RecipeInput!): Recipe!
  }
`;

export { typeDefs };
