import { gql } from '@apollo/client';
import { GraphQLError } from 'graphql';
import { Datasource } from './Datasource';
import { BLOG_APP_ID } from '../config';
import { BiznicheEntry } from '../types';

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

const GET_FEED_QUERY = gql`
  query GetEntryFeedQuery($input: GetEntryFeedQueryInput) {
    getEntryFeedQuery(input: $input) {
      id
      title
      slug
      description
      content
      is_draft
      is_archived
      is_deleted
      author {
        id
        email
        username
      }
      created_at
      updated_at
    }
  }
`;

export class BlogDatasource extends Datasource {
  appId: string;

  constructor() {
    super();
    this.appId = BLOG_APP_ID;
  }

  private async ensureAppInstalled(appId: string) {
    try {
      const res = await this.client.query({
        query: GET_MARKETPLACE_APP,
        variables: {
          appId,
        },
      });

      if (!res.data.getMarketplaceApp.installed) {
        throw new GraphQLError('Blog app is not installed');
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new GraphQLError(
          `Error checking app installation: ${error.message}`,
        );
      }
    }
  }

  public async getEntries() {
    try {
      await this.ensureAppInstalled(this.appId);

      const { data, loading, error } = await this.client.query({
        query: GET_FEED_QUERY,
      });

      return {
        feed: data.getEntryFeedQuery as BiznicheEntry[],
        loading,
        error,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new GraphQLError(`Failed to fetch entrie: ${error.message}`);
      }
    }
  }
}
