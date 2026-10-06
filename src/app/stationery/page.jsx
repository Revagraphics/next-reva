import StationeryPageClient from "./StationeryPageClient";

export const metadata = {
  title: "Custom Stationery Printing | Reva Graphics",
  description:
    "Create polished business stationery with custom-designed letterheads, envelopes, and print materials from Reva Graphics.",
  openGraph: {
    title: "Custom Stationery Printing | Reva Graphics",
    description:
      "Custom-designed letterheads, envelopes, and professional business stationery.",
  },
};

export default function StationeryPage() {
  return <StationeryPageClient />;
}
