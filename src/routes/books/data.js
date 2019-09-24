import ApolloClient, { gql } from 'apollo-boost';
import fetch from 'node-fetch';

export const client = new ApolloClient({
  uri: 'http://localhost:4000',
  fetch: fetch
});

export const BOOKS = gql`
  {
    books {
      id
      title
    }
  }
`;
