import DevelopmentPageClient from "./DevelopmentPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Web Development Services | Reva Graphics",
  "Custom web development and digital products built for performance, usability, and growth by Reva Graphics.",
  "/development",
);

export default function DevelopmentPage() {
  return <DevelopmentPageClient />;
}
