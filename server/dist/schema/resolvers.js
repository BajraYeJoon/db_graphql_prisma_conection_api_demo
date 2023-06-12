"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const { prisma } = require("../db");
const resolvers = {
    Query: {
        recipes: async () => {
            return await prisma.recipe.findMany();
        },
    },
    Mutation: {
        addRecipe: async (_parent, args) => {
            const { title, description } = args;
            const recipe = await prisma.recipe.create({
                data: {
                    title: title,
                    description: description,
                },
            });
            return recipe;
        },
    },
};
exports.resolvers = resolvers;
