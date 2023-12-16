import { BlogDatasource } from '../datasources/BlogDatasource';

interface useAppHookProps {
  blog?: boolean;
}

export function useApp({ blog }: useAppHookProps) {
  return {
    blog: blog ? new BlogDatasource() : null,
  };
}
