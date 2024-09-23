// app/providers.tsx
'use client';

import client from '@/apolloClient';
import { ApolloProvider } from '@apollo/client';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
