require('dotenv').config();

module.exports = {
  projects: {
    server: {
      schema: "apps/server/src/generated/graphql.schema.json",
      documents: [
        "apps/server/src/**/*.graphql",
        "apps/server/src/**/**/*.graphql",
        "apps/server/src/**/**/**/*.graphql",
        "apps/server/src/**/**/**/**/*.graphql"
      ],
      extensions: {
        endpoints: {
          default: {
            url: 'https://gql.optindustries.link/v1/graphql',
            headers: {
              "X-Hasura-Admin-Secret": `${process.env.HASURA_GRAPHQL_ADMIN_SECRET}`,
            }
          },
        },
      },
    },
    fe: {
      schema: "apps/fe/src/generated/graphql.schema.json",
      documents: [
        "apps/fe/src/**/*.graphql",
        "apps/fe/src/**/**/*.graphql",
        "apps/fe/src/**/**/**/*.graphql",
        "apps/fe/src/**/**/**/**/*.graphql"
      ],
      extensions: {
        endpoints: {
          default: {
            url: 'https://gql.optindustries.link/v1/graphql',
            headers: {
              "X-Hasura-Admin-Secret": `${process.env.HASURA_GRAPHQL_ADMIN_SECRET}`,
              "X-Hasura-Role": "user"   
            }
          },
        },
      },
    },
  },
}