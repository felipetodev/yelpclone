import { ApolloClient, InMemoryCache } from '@apollo/client'

const API_KEY = ''

export const client = new ApolloClient({
  uri: 'https://api.yelp.com/v3/graphql',
  cache: new InMemoryCache(),
  headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/graphql',
  }
})