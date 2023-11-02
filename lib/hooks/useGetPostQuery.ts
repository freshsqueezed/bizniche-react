import { QueryHookOptions, gql, useQuery } from '@apollo/client';
import { BiznicheBlogPost } from '../types';

interface GetPostQueryOptions {
  input: {
    id?: string;
    slug?: string;
  };
}

const GET_POST_QUERY = gql`
  query GetPostQuery($input: GetPostQueryInput!) {
    getPostQuery(input: $input) {
      id
      title
      slug
      description
      author {
        id
        email
        username
        role
      }
      created_at
      updated_at
    }
  }
`;

export function useGetPostQuery(
  queryOptions?: GetPostQueryOptions & QueryHookOptions,
) {
  const { data, loading, error } = useQuery(GET_POST_QUERY, queryOptions);

  return {
    post: data?.getPostQuery as BiznicheBlogPost,
    loading,
    error,
  };
}
