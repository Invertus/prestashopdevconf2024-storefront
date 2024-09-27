'use client'

import {
    QueryClient,
    QueryClientProvider as QueryClientProviderBase,
  } from '@tanstack/react-query'
  import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProviderBase client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProviderBase>
  );
}

export default QueryClientProvider