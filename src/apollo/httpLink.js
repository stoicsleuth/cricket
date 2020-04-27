import { HttpLink } from 'apollo-link-http'

export default new HttpLink({
  uri: 'https://api.devcdc.com/cricket'
})
