import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const httpLink = new HttpLink({ uri: "http://localhost:9000/graphql" });
const token = localStorage.getItem("user");
console.log("HERE " + token);
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
console.log("AUTH ", authLink);
let link = authLink.concat(httpLink);
export default new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
