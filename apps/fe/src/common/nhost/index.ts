import { createClient } from 'nhost-js-sdk';

const origin = window.location.origin;
export const BACKEND_ENDPOINT =
  origin === 'http://localhost:3000'
    ? 'http://localhost:4000'
    : 'https://auth.optindustries.link';

export const nhost = createClient({
  baseURL: BACKEND_ENDPOINT,
});

export const { auth, storage } = nhost
export const GQL_ENDPOINT = 
origin === 'http://localhost:3000'
  ? 'http://localhost:8080'
  : 'https://gql.optindustries.link/v1/graphql';

export * from './NhostApolloProvider';
