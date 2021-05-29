import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "http://182.61.12.9:8000/subgraphs/name/pancakeswap/exchange",
  }),
  cache: new InMemoryCache(),
});
