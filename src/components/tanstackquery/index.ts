export * from './createQueryClient';
export * from './fetchJson';
export * from './useAppQuery';

// Re-export selected tanstack/react-query symbols so consumers can reference them through this package
export { 
  QueryClient, 
  QueryClientProvider, 
  useQuery, 
  useMutation,
  useInfiniteQuery,
  useQueryClient,
  useIsFetching,
  useIsMutating,
  useSuspenseQuery,
  useSuspenseInfiniteQuery
} from '@tanstack/react-query';

export type { 
  QueryClientConfig, 
  QueryKey, 
  UseQueryOptions, 
  QueryFunction,
  UseMutationOptions,
  UseInfiniteQueryOptions,
  InfiniteData,
  MutationFunction,
  QueryObserverResult
} from '@tanstack/react-query';
