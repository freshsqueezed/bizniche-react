import { QueryHookOptions, gql, useQuery } from '@apollo/client';
import { BiznicheBlogPost } from '../types';

interface GetFeedQueryOptions {
  input: {
    limit: number;
    offset: number;
  };
}

const GET_FEED_QUERY = gql`
  query GetFeedQuery($input: GetFeedQueryInput) {
    getFeedQuery(input: $input) {
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

export function useGetFeedQuery(
  queryOptions?: QueryHookOptions<GetFeedQueryOptions>,
) {
  const { data, loading, error, fetchMore } = useQuery(
    GET_FEED_QUERY,
    queryOptions,
  );

  return {
    feed: data?.getFeedQuery as BiznicheBlogPost[],
    loading,
    error,
    fetchMore,
  };
}
