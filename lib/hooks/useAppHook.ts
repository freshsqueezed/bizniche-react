import { useGetFeedQuery } from './useGetEntriesFeedQuery';
import { useGetEntryQuery } from './useGetEntryQuery';

export function useApp() {
  return {
    blog: {
      entryFeed: useGetFeedQuery,
      entry: useGetEntryQuery,
    },
  };
}
