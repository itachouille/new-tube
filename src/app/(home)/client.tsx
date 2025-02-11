"use client";

import { trpc } from "@/trpc/client";

export const HomePageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({ text: "anthony" });

  return (
    <div>
      <p>HomePage client says: {data.greeting}</p>
    </div>
  );
};
