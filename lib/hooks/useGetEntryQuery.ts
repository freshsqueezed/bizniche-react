import { QueryHookOptions, gql, useQuery } from '@apollo/client';
import { BiznicheEntry } from '../types';

interface GetEntryQueryOptions {
  input: {
    slug: string;
  };
}

const GET_ENTRY_QUERY = gql`
  query GetEntryQuery($input: GetEntryQueryInput!) {
    getEntryQuery(input: $input) {
      id
      title
      slug
      description
      content
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

export function useGetEntryQuery(
  queryOptions: QueryHookOptions<GetEntryQueryOptions>,
) {
  const { data, loading, error } = useQuery(GET_ENTRY_QUERY, queryOptions);

  return {
    entry: data?.getEntryQuery as BiznicheEntry,
    loading,
    error,
  };
}
