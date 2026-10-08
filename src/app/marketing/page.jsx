import MarketingPageClient from "./MarketingPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Digital Marketing Services | Reva Graphics",
  "Grow your business with strategic digital marketing, search optimization, and eCommerce solutions from Reva Graphics.",
  "/marketing",
);

export default function MarketingPage() {
  return <MarketingPageClient />;
}
