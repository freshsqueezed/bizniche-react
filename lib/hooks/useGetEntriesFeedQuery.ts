import { QueryHookOptions, gql, useQuery } from '@apollo/client';
import { BiznicheEntry } from '../types';

interface GetFeedQueryOptions {
  input: {
    limit: number;
    offset: number;
  };
}

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

export function useGetFeedQuery(
  queryOptions?: QueryHookOptions<GetFeedQueryOptions>,
) {
  const { data, loading, error, fetchMore } = useQuery(
    GET_FEED_QUERY,
    queryOptions,
  );

  return {
    feed: data?.getEntryFeedQuery as BiznicheEntry[],
    loading,
    error,
    fetchMore,
  };
}
