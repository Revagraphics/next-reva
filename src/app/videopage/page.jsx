import VideoPageClient from "./VideoPageClient";

export const metadata = {
  title: "Video Production & Editing | Reva Graphics",
  description:
    "Discover video production, editing, motion graphics, and post-production services from Reva Graphics.",
  openGraph: {
    title: "Video Production & Editing | Reva Graphics",
    description:
      "Video production, editing, motion graphics, and post-production services from Reva Graphics.",
  },
};

export default function VideoPage() {
  return <VideoPageClient />;
}
