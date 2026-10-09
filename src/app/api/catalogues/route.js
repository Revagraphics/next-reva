import { catalogues } from "@/lib/catalogues";

export async function GET() {
  return Response.json({ catalogues });
}
