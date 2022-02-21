import { Resolvers } from "generated";
import { prisma } from "main";
import { mutations } from "./mutations";
import { queries } from "./queries";

export const resolvers: Resolvers = {
  Query: queries,
  Mutation: mutations,
  Construction:{
    async parts({id, owner}){
      return await prisma.constructionPart.findMany({
        where:{
          constructionId: id
        }
      })
    }
  },
  ConstructionPart:{
    async part({partId}){
      return await prisma.part.findFirst({
        where:{
          id: partId
        }
      })
    },
    async construction({constructionId}){
      return await prisma.construction.findFirst({
        where:{
          id: constructionId
        }
      })
    }
  },
  Part:{
    constructionParts({id}){
      return prisma.constructionPart.findMany({
        where:{
          partId: id
        }
      })
    }
  }
};