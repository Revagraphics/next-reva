import StationeryPageClient from "./StationeryPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Custom Stationery Printing | Reva Graphics",
  "Create polished business stationery with custom-designed letterheads, envelopes, and print materials from Reva Graphics.",
  "/stationery",
);

export default function StationeryPage() {
  return <StationeryPageClient />;
}
