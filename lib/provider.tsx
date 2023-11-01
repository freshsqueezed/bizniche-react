import { PropsWithChildren } from "react";
import { ApolloProvider } from "@apollo/client";
import configureClient from "./client";

interface BiznicheProviderProps extends PropsWithChildren {
  apiKey: string;
  config?: any;
}

export const BiznicheProvider = ({
  apiKey,
  children,
}: BiznicheProviderProps) => {
  return (
    <ApolloProvider client={configureClient({ apiKey })}>
      {children}
    </ApolloProvider>
  );
};
