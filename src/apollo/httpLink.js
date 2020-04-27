import { HttpLink } from 'apollo-link-http'
console.log(process.env.API_URL)
export default new HttpLink({
  uri: 'https://api.devcdc.com/cricket'
})
