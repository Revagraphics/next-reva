export const catalogues = [
  {
    slug: "aarika-lookbook-2026",
    title: "Aarika Lookbook 2026",
    description: "Spring / Summer Collection",
    cover:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
    pdfUrl: "/aarika.pdf",
    pages: 24,
  },
  {
    slug: "eezy-chair-2026",
    title: "eezy chair 2026",
    description: "Spring / Summer Collection",
    cover:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
    pdfUrl: "/aarika_2.pdf",
    pages: 24,
  },
];

export function getCatalogueBySlug(slug) {
  return catalogues.find((catalogue) => catalogue.slug === slug) ?? null;
}
