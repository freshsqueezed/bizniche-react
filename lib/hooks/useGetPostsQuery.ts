import { useMemo } from "react";
import { gql, QueryHookOptions, useQuery } from "@apollo/client";

interface GetFeedQueryOptions {}

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

  const feed = useMemo(() => {
    if (data) {
      return data.getFeed;
    }
  }, [data]);

  return { feed, loading, error };
}
