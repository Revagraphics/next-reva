import HomePageClient from "./HomePageClient";

export const metadata = {
  title: "Reva Graphics | Creative, Design & Digital Solutions",
  description:
    "Build your brand with Reva Graphics: creative design, digital marketing, web development, and print solutions.",
  openGraph: {
    title: "Reva Graphics | Creative, Design & Digital Solutions",
    description:
      "Creative design, digital marketing, web development, and print solutions tailored to your business.",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
