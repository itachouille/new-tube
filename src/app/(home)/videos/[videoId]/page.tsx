import { VideoView } from "@/modules/videos/ui/views/video-view";
import { trpc } from "@/trpc/server";
import { HydrateClient } from "@/trpc/server";

interface PageProps {
  params: Promise<{
    videoId: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { videoId } = await params;

  void trpc.videos.getOne.prefetch({ id: videoId });

  return (
    <HydrateClient>
      <VideoView videoId={videoId} />
    </HydrateClient>
  );
};

export default Page;
