import { useMemo } from "react";
import { gql, QueryHookOptions, useQuery } from "@apollo/client";

interface GetAllPostsQueryOptions {}

export const ME_QUERY = gql`
  query GetAllPosts {
    me {
      id
      username
      email
    }
  }
`;

export function useGetPostsQuery(
  queryOptions?: GetAllPostsQueryOptions & QueryHookOptions
) {
  const { data, loading, error } = useQuery(ME_QUERY, queryOptions);

  const me = useMemo(() => {
    if (data) {
      return data.me;
    }
  }, [data]);

  return { me, loading, error };
}
