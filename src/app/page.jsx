import HomePageClient from "./HomePageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Reva Graphics | Creative, Design & Digital Solutions",
  "Build your brand with Reva Graphics: creative design, digital marketing, web development, and print solutions.",
  "/",
);

export default function HomePage() {
  return <HomePageClient />;
}
