import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { resolve } from "path";
import { config } from "dotenv";
config({ path: resolve(__dirname, "../../../.env.production")});
config({ path: resolve(__dirname, "../../../.env.staging")});

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URL });
const authMiddleware = new ApolloLink((operation, forward) => {

  operation.setContext({
    headers: {
      'pdr-signup': localStorage.getItem('pdr-signup') || null,
      'pdr-token': localStorage.getItem('pdr-token') || null,
    }
  });

  return forward(operation);
})

export const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache({ addTypename: false }),
});

client.defaultOptions.query = { fetchPolicy: 'network-only' }
