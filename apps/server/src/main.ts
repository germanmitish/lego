import { PrismaClient } from '@prisma/client'
import { ApolloServer, gql } from 'apollo-server'
import { resolvers } from 'app/resolvers';
import { readFileSync } from 'node:fs';
import { environment } from 'environments/environment';
import typeDefUrl from './schema.graphql';

const typeDefs = readFileSync(environment.projectRoot + typeDefUrl, 'utf-8')

export const prisma = new PrismaClient({ 
  rejectOnNotFound: true,   
  datasources: {
    db: { url: process.env.MONGODB_STRING }
  }, 
})

const server = new ApolloServer({ typeDefs, resolvers });


async function main() {
  await prisma.$connect()
  console.log('Connected to MongoDB')

  await prisma.part.deleteMany({})

  await prisma.part.createMany({
    data: [
      { 'name': 'PartA', volume: 12 },
      { 'name': 'PartB', volume: 24 },
      { 'name': 'PartC', volume: 36 }
    ],
  })
  console.log('Created parts')

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })