"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const { gql } = require("apollo-server");
const typeDefs = gql `
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
exports.typeDefs = typeDefs;
