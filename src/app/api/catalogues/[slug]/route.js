import { getCatalogueBySlug } from "@/lib/catalogues";

export async function GET(_request, { params }) {
  const { slug } = await params;
  const catalogue = getCatalogueBySlug(slug);

  if (!catalogue) {
    return Response.json({ error: "Catalogue not found" }, { status: 404 });
  }

  return Response.json({ catalogue });
}
