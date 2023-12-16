import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
// import { CORE_API_URL } from './config';

export default function configureClient({
  apiKey,
}: {
  apiKey: string;
}): ApolloClient<NormalizedCacheObject> {
  const link = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    // uri: CORE_API_URL,
    headers: {
      'x-bizniche-api-key': apiKey,
    },
  });

  return new ApolloClient<NormalizedCacheObject>({
    link,
    cache: new InMemoryCache(),
  });
}
