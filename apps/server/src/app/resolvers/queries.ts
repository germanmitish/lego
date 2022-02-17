import { Resolvers } from "generated";
import { prisma } from "main";

export const queries: Resolvers['Query'] = {
    constructionByOwner: async (parent, { owner }, context, info) => {
      return await prisma.construction.findMany({
        where: {
          owner:{
            equals: owner
          }
        }
      });
    },
    constructionByPk: async (parent, { id }, context, info) => {
      return await prisma.construction.findFirst({
        where:{
          id:{
            equals: id
          }
        }
      });
    },
    constructionPartByPk: async (parent, { id }, context, info) => {
      return await prisma.constructionPart.findFirst({
        where:{
          id:{
            equals: id
          }
        }
      });
    },
    partByPk: async (parent, { id }, context, info) => {
      return await prisma.part.findFirst({
        where:{
          id:{
            equals: id
          }
        }
      });
    },
    parts: async (parent, { limit, offset }, context, info) => {
      return await prisma.part.findMany({
        ...(offset && {skip: offset}),
        ...(limit && {take: limit})
      });
    }
};