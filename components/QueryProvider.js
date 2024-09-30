"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

const persister = createSyncStoragePersister({
  storage: typeof window !== "undefined" ? window.localStorage : null,
  key: "aktCache",
});

export const QueryProvider = ({ children }) => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
    </PersistQueryClientProvider>
  );
};
