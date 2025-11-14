"use client"

import { FilterBar } from "@/components/FilterBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <div className="bg-[#F3F5F6] h-screen px-40 py-8">
        <FilterBar />
      </div>
    </QueryClientProvider>
  );
}
