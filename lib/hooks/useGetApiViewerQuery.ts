import { useMemo } from "react";
import { gql, QueryHookOptions, useQuery } from "@apollo/client";

interface GetApiViewerQueryOptions {}

export const API_VIEWER_QUERY = gql`
  query GetApiViewer {
    me {
      id
      username
      email
      role
    }
  }
`;

export function useGetApiViewerQuery(
  queryOptions?: GetApiViewerQueryOptions & QueryHookOptions
) {
  const { data, loading, error } = useQuery(API_VIEWER_QUERY, queryOptions);

  const apiViewer = useMemo(() => {
    if (data) {
      return data.apiViewer;
    }
  }, [data]);

  return { apiViewer, loading, error };
}
