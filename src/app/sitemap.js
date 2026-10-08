import { SITE_URL } from "@/lib/seo";

const routes = [
  "/",
  "/about",
  "/application",
  "/branding",
  "/catalogue",
  "/cloud",
  "/contact",
  "/content",
  "/corporate",
  "/designing",
  "/development",
  "/events",
  "/gifting",
  "/marketing",
  "/portfolio",
  "/printing",
  "/stationery",
  "/videopage",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
  }));
}
