import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

export default function configureClient({
  apiKey,
}: {
  apiKey: string;
}): ApolloClient<NormalizedCacheObject> {
  const link = new HttpLink({
    uri: "https://api.bizniche.co/graphql",
    headers: {
      "x-bizniche-api-key": apiKey,
    },
  });

  return new ApolloClient<NormalizedCacheObject>({
    link,
    cache: new InMemoryCache({}),
  });
}
