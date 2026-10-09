"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const PdfFlipBook = dynamic(() => import("@/components/PdfFlipBook"), {
  ssr: false,
  loading: () => (
    <p className="text-sm text-neutral-500">Loading PDF viewer...</p>
  ),
});

export default function CatalogueViewer({ catalogue }) {
  return (
    <main className="flex h-svh min-h-0 flex-col overflow-hidden bg-neutral-100">
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

      <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden px-2 py-3 sm:px-6 sm:py-4">
        <PdfFlipBook pdfUrl={catalogue.pdfUrl} />
      </div>
    </main>
  );
}
