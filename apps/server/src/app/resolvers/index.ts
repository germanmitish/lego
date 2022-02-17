import { Resolvers } from "generated";
import { mutations } from "./mutations";
import { queries } from "./queries";

export const resolvers: Resolvers = {
  Query: queries,
  Mutation: mutations
};