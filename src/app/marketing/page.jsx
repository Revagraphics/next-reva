import MarketingPageClient from "./MarketingPageClient";

export const metadata = {
  title: "Digital Marketing Services | Reva Graphics",
  description:
    "Grow your business with strategic digital marketing, search optimization, and eCommerce solutions from Reva Graphics.",
  openGraph: {
    title: "Digital Marketing Services | Reva Graphics",
    description:
      "Strategic digital marketing, search optimization, and eCommerce solutions to grow your business.",
  },
};

export default function MarketingPage() {
  return <MarketingPageClient />;
}
