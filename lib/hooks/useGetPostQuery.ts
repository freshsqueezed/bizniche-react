import { gql, useQuery } from '@apollo/client';
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

export function useGetPostQuery(queryOptions: GetPostQueryOptions) {
  const { data, loading, error, refetch } = useQuery(GET_POST_QUERY, {
    variables: {
      ...queryOptions,
    },
  });

  return {
    post: data?.getPostQuery as BiznicheBlogPost,
    loading,
    error,
    refetch,
  };
}
