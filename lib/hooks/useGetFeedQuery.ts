import { QueryHookOptions, gql, useQuery } from "@apollo/client";

interface GetFeedQueryOptions {
  limit: number;
  offset: number;
}

const GET_FEED_QUERY = gql`
  query GetFeedQuery {
    getFeedQuery {
      id
      title
      slug
      description
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
  queryOptions?: GetFeedQueryOptions & QueryHookOptions
) {
  const { data, loading, error } = useQuery(GET_FEED_QUERY, queryOptions);

  return {
    feed: data?.getFeedQuery,
    loading,
    error,
  };
}
