export const SITE_URL = "https://revagraphics.com";

export function createPageMetadata(title, description, pathname) {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "website",
      siteName: "Reva Graphics",
      locale: "en_IN",
      title,
      description,
      url: new URL(pathname, SITE_URL).toString(),
      images: [
        {
          url: new URL("/opengraph-image", SITE_URL).toString(),
          width: 1200,
          height: 630,
          alt: "Reva Graphics creative design, digital, and print services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/twitter-image", SITE_URL).toString()],
    },
  };
}
