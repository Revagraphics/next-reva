import PortfolioPageClient from "./PortfolioPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Our Portfolio | Reva Graphics",
  "Browse selected branding, design, development, and marketing projects from the Reva Graphics team.",
  "/portfolio",
);

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
