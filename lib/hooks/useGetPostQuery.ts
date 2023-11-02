import { QueryHookOptions, gql, useQuery } from '@apollo/client';
import { BiznicheBlogPost } from '../types';

interface GetPostQueryOptions {
  input: {
    slug: string;
  };
}

const GET_POST_QUERY = gql`
  query GetPostQuery($input: GetPostQueryInput!) {
    getPostQuery(input: $input) {
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

export function useGetPostQuery(
  queryOptions: QueryHookOptions<GetPostQueryOptions>,
) {
  const { data, loading, error } = useQuery(GET_POST_QUERY, queryOptions);

  return {
    post: data?.getPostQuery as BiznicheBlogPost,
    loading,
    error,
  };
}
