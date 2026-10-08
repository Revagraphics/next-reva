import { ImageResponse } from "next/og";
import SeoShareImage from "@/components/SeoShareImage";

export const alt = "Reva Graphics creative design, digital, and print services";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<SeoShareImage />, size);
}
