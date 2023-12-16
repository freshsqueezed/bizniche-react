import { gql } from '@apollo/client';
import { Datasource } from './Datasource';

type MarketplaceApp = {
  id: string;
  name: string;
  description: string;
  installed: boolean;
};

export const GET_MARKETPLACE_APP = gql`
  query GetMarketplaceApp($appId: ID!) {
    getMarketplaceApp(appId: $appId) {
      id
      name
      description
      teaser
      overview
      features {
        name
        description
      }
      installed
      rating
      reviews
    }
  }
`;

export class AppDatasource extends Datasource {
  public async getMarketplaceApp(appId: string): Promise<MarketplaceApp> {
    const res = await this.client.query({
      query: GET_MARKETPLACE_APP,
      variables: {
        appId,
      },
    });

    return res.data.getMarketplaceApp;
  }
}
