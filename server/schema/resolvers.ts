const { prisma } = require("../db.js");

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

export { resolvers };
