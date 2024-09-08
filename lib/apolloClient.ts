import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://syn-api-prod.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiNjM3NTA4ZjktMTI0Yy00NzlmLThhYTUtNzMwNmMwNjcxZTZjIiwicHJvamVjdElkIjoiZTEyNTE2YzYtOTJhOC00OGQxLTlmNjEtM2E4ZmNjNDZjZTNjIiwiZnVsbE5hbWUiOiJXaWxseSBSb3NhIEh1YW5jYSIsImVtYWlsIjoid2lsbHkucm9zYWhAZ21haWwuY29tIiwiaWF0IjoxNzI1NjQ1ODUzfQ.gDQ1SFeMmOYn2qLc4_rn777Qp6fdVymHkDHKlrS5Ago",
  },
});

export default client;
