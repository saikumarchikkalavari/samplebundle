import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

// Use a loose type for defaults to avoid tight coupling to library internal option shapes
export const defaultQueryClientConfig: any = {
  defaultOptions: {
    queries: {
      retry: (failureCount: number, error: unknown) => {
        // don't retry 4xx errors
        const status = (error as any)?.status ?? (error as any)?.response?.status;
        if (typeof status === 'number' && status >= 400 && status < 500) {
          return false;
        }
        return failureCount < 1;
      },
      staleTime: 1000 * 60, // 1 minute
      cacheTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      useErrorBoundary: false
    }
  }
};

export function createQueryClient(config?: QueryClientConfig) {
  const merged: QueryClientConfig = {
    ...defaultQueryClientConfig,
    ...(config || {}),
    defaultOptions: {
      ...(defaultQueryClientConfig.defaultOptions || {}),
      ...(config?.defaultOptions || {})
    }
  };
  const qc = new QueryClient(merged);
  // Keep a reference to defaultOptions on the client so consumer tests and runtime code can inspect it
  // (some QueryClient implementations may not expose this directly)
  (qc as any).defaultOptions = merged.defaultOptions || {};
  return qc;
}

export default createQueryClient;