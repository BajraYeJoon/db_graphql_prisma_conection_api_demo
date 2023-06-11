const { prisma } = require("./db.js");

const resolvers = {
  Query: {
    recipes: async () => {
      return await prisma.recipe.findMany();
    },
  },
  Mutation: {
    addRecipe: async (_parent: any, args: { title: any; description: any }) => {
      const recipe = await prisma.recipe.create({
        data: {
          title: args.title,
          description: args.description,
        },
      });

      return recipe;
    },
  },
};

export default resolvers;
