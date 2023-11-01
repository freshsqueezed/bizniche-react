import { gql, QueryHookOptions, useQuery } from "@apollo/client";

interface GetApiViewerQueryOptions {}

export const API_VIEWER_QUERY = gql`
  query GetApiViewer {
    apiViewer {
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

  return {
    apiViewer: data?.apiViewer,
    loading,
    error,
  };
}
