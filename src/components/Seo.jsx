'use client';

import { usePathname } from "next/navigation";

export default function Seo({
  title = "Reva Graphics",
  description = "Creative design and digital solutions by Reva Graphics.",
  noIndex = false,
}) {
  const pathname = usePathname();

  const url = `https://revagraphics.com${pathname}`;

  return (
    <>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* SEO */}
      <meta name="robots" content={noIndex ? "noindex, follow" : "index, follow"} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </>
  );
}
