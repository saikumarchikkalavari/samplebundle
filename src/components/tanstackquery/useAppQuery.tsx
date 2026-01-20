import { useQuery, UseQueryOptions, QueryKey, QueryFunction } from '@tanstack/react-query';

export type UseAppQueryOptions<TData, TError = unknown, TQueryFnData = TData> = UseQueryOptions<TData, TError, TQueryFnData>;

export function useAppQuery<TData = unknown, TError = unknown, TQueryFnData = TData>(
  queryKey: QueryKey,
  queryFn: QueryFunction<TQueryFnData, QueryKey>,
  options?: UseAppQueryOptions<TData, TError, TQueryFnData>
) {
  // default options can be overridden by consumer
  const mergedOptions: UseAppQueryOptions<TData, TError, TQueryFnData> = {
    suspense: false,
    useErrorBoundary: false,
    refetchOnWindowFocus: false,
    ...options
  } as UseAppQueryOptions<TData, TError, TQueryFnData>;

  // remove queryKey if present in options to avoid duplicate keys when spreading
  const { queryKey: _maybe, ...restOptions } = mergedOptions as any;

  // use object form to match react-query v5 overloads and avoid fragile generic ordering
  return useQuery({ queryKey, queryFn: queryFn as any, ...(restOptions as any) } as any);
}

export default useAppQuery;