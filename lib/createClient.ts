import { GraphQLClient } from 'graphql-request';

interface ClientConfig {
  apiKey: string;
  endpoint: string;
}

export class BiznicheClient {
  private client: GraphQLClient;

  constructor(private readonly config: ClientConfig) {
    this.client = new GraphQLClient(this.config.endpoint, {
      headers: {
        'x-api-key': this.config.apiKey,
      },
    });
  }

  async find<T>(
    collection: string,
    where: Record<string, any>,
    fields: Array<keyof T | string>,
  ): Promise<T> {
    const formattedCollection = collection.charAt(0).toUpperCase().slice(1);

    const query = `
      query Find${formattedCollection}WhereInput!) {
        find${formattedCollection}(where: $where) {
          ${fields.join('\n')}
        }
      }
    `;

    try {
      const data = await this.client.request<T>(query, { where });
      return data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error}`);
    }
  }
}

export function createClient(config: ClientConfig): BiznicheClient {
  return new BiznicheClient(config);
}
