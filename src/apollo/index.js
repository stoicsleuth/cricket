import { ApolloClient } from 'apollo-client'

import cache from './cache'
import link from './httpLink'

const client = new ApolloClient({
  cache,
  link
})

export default client
