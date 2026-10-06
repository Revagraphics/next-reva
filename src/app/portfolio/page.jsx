import PortfolioPageClient from "./PortfolioPageClient";

export const metadata = {
  title: "Our Portfolio | Reva Graphics",
  description:
    "Browse selected branding, design, development, and marketing projects from the Reva Graphics team.",
  openGraph: {
    title: "Our Portfolio | Reva Graphics",
    description:
      "Browse selected branding, design, development, and marketing projects from Reva Graphics.",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
