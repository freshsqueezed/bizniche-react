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
    fields: string[],
  ): Promise<T> {
    const query = `
      query Find${collection.toUpperCase()}($where: ${collection.toUpperCase()}WhereInput!) {
        find${collection.toUpperCase()}(where: $where) {
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
