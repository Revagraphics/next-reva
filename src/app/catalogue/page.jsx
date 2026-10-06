import CataloguePageClient from "./CataloguePageClient";

export const metadata = {
  title: "Digital Catalogue & Lookbook Printing | Reva Graphics",
  description:
    "Explore premium digital catalogues and lookbooks from Reva Graphics, with interactive PDF previews and high-quality print production.",
  openGraph: {
    title: "Digital Catalogue & Lookbook Printing | Reva Graphics",
    description:
      "Explore premium digital catalogues and lookbooks with interactive PDF previews and high-quality print production.",
  },
};

export default function CataloguePage() {
  return <CataloguePageClient />;
}
