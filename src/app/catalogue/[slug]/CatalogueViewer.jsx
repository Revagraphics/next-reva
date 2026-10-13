"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const PdfFlipBook = dynamic(() => import("@/components/PdfFlipBook"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <p className="text-sm text-neutral-500">Loading PDF viewer...</p>
    </div>
  ),
});

export default function CatalogueViewer({ catalogue }) {
  return (
    <main className="flex min-h-svh flex-col bg-neutral-100 pt-28">
      {/* Page header */}
      <header className="flex shrink-0 items-center justify-between gap-4 border-b border-neutral-200 bg-white px-4 py-3 sm:px-8">
        <div className="min-w-0">
          <h1 className="truncate font-serif text-lg text-neutral-900 sm:text-2xl">
            {catalogue.title}
          </h1>
          <p className="truncate text-sm text-neutral-500">
            {catalogue.description}
          </p>
        </div>
        <Link
          href="/catalogue"
          className="shrink-0 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
        >
          All catalogues
        </Link>
      </header>

      {/* Viewer area – takes remaining height only */}
      <div className="h-[82svh] min-h-[32rem] shrink-0 px-2 py-2 sm:px-4 sm:py-3">
        <PdfFlipBook key={catalogue.slug} pdfUrl={catalogue.pdfUrl} />
      </div>
    </main>
  );
}