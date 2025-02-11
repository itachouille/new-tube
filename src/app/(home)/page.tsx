import { HydrateClient, trpc } from "@/trpc/server";
import { HomePageClient } from "./client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function Home() {
  void trpc.hello.prefetch({ text: "anthony testing" });

  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorBoundary fallback={<p>Error...</p>}>
          <HomePageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
