import CataloguePageClient from "./CataloguePageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Digital Catalogue & Lookbook Printing | Reva Graphics",
  "Explore premium digital catalogues and lookbooks from Reva Graphics, with interactive PDF previews and high-quality print production.",
  "/catalogue",
);

export default function CataloguePage() {
  return <CataloguePageClient />;
}
