import { Resolvers } from "generated";
import { prisma } from "main";
import randomWords from "random-words";

export const mutations: Resolvers['Mutation'] = {
    createConstruction: async (parent, { input:{ owner, name } }, context, info) => {
      return await prisma.construction.create({
        data:{
          name: name||randomWords(2).join('-'),
          owner
        }
      });
    },
    createConstructionPart: async (parent, { input:{ constructionId, partId } }, context, info) => {
      return await prisma.constructionPart.create({
        data:{
          construction:{
            connect:{
              id: constructionId
            }
          },
          part:{
            connect:{
              id: partId
            }
          }
        }
      });
    },
    createPart: async (parent, { input:{ name, volume } }, context, info) => {
      
      return await prisma.part.create({
        data:{
          name: name||randomWords(2).join('-'),
          volume
        }
      });
    },
    deleteConstruction: async (parent, { id }, context, info) => {
      return await prisma.construction.delete({
        where:{
          id
        }
      });
    },
    deleteConstructionPart: async (parent, { id }, context, info) => {
      return await prisma.constructionPart.delete({
        where:{
          id
        }
      });
    },
    deletePart: async (parent, { id }, context, info) => {
      return await prisma.part.delete({
        where:{
          id
        }
      });
    },
    updateConstruction: async (parent, { id, input:{ name, owner } }, context, info) => {
      return await prisma.construction.update({
        where:{
          id
        },
        data:{
          ...(name && {name}),
          ...(owner && {owner})
        }
      });
    },
    updateConstructionPart: async (parent, { id, input:{ partId, constructionId } }, context, info) => {
      return await prisma.constructionPart.update({
        where:{
          id
        },
        data:{
          ...(partId && {part:{
            connect:{
              id: partId
            }
          }}),
          ...(constructionId && {construction:{
            connect:{
              id: constructionId
            }
          }}),
        }
      });
    },
    updatePart: async (parent, { id, input:{ name, volume } }, context, info) => {
      return await prisma.part.update({
        where:{
          id
        },
        data:{
          ...(name && {name}),
          ...(volume && {volume})
        }
      });
    }
};