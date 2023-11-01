import { gql, QueryHookOptions, useQuery } from "@apollo/client";

interface GetFeedQueryOptions {
  limit: number;
  offset: number;
}

export const GET_FEED_QUERY = gql`
  query GetAllPosts {
    getAllPosts {
      id
    }
  }
`;

export function useGetFeedQuery(
  queryOptions?: GetFeedQueryOptions & QueryHookOptions
) {
  const { data, loading, error } = useQuery(GET_FEED_QUERY, queryOptions);

  return {
    feed: data?.getFeed,
    loading,
    error,
  };
}
