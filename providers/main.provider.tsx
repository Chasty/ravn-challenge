"use client";

import client from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { SearchProvider } from "./search.provider";

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <SearchProvider>{children}</SearchProvider>
    </ApolloProvider>
  );
};
