import { ApolloClient, useApolloClient } from '@apollo/client';

export class Datasource {
  client: ApolloClient<object>;

  constructor() {
    this.client = useApolloClient();
  }
}
