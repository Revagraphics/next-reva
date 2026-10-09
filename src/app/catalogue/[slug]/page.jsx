import { notFound } from "next/navigation";
import CatalogueViewer from "./CatalogueViewer";
import { getCatalogueBySlug } from "@/lib/catalogues";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const catalogue = getCatalogueBySlug(slug);

  if (!catalogue) {
    return { title: "Catalogue Not Found | Reva Graphics" };
  }

  return {
    title: `${catalogue.title} | Reva Graphics`,
    description: catalogue.description,
  };
}

export default async function CatalogueDetailPage({ params }) {
  const { slug } = await params;
  const catalogue = getCatalogueBySlug(slug);

  if (!catalogue) {
    notFound();
  }

  return <CatalogueViewer catalogue={catalogue} />;
}
