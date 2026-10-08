import VideoPageClient from "./VideoPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Video Production & Editing | Reva Graphics",
  "Discover video production, editing, motion graphics, and post-production services from Reva Graphics.",
  "/videopage",
);

export default function VideoPage() {
  return <VideoPageClient />;
}
