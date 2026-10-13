"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { FaDownload, FaMinus, FaPlus, FaPrint } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const PdfPage = React.forwardRef(({ children }, ref) => (
  <div className="pdf-flip-page" ref={ref}>
    <div className="pdf-flip-page-content">{children}</div>
  </div>
));
PdfPage.displayName = "PdfPage";

export default function PdfFlipBook({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(320);
  const [pageAspect, setPageAspect] = useState(0.707);
  const [loadError, setLoadError] = useState(null);
  const [activePage, setActivePage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isPortrait, setIsPortrait] = useState(false);

  const bookAreaRef = useRef(null);
  const bookRef = useRef(null);

  // Responsive size calculation – respects available space
  useEffect(() => {
    const bookArea = bookAreaRef.current;
    if (!bookArea) return;

    const updateSize = () => {
      const { width, height } = bookArea.getBoundingClientRect();
      const portrait = width < 720;
      setIsPortrait(portrait);

      const availableWidth = Math.max(
        1,
        portrait ? width - 24 : (width - 40) / 2,
      );
      const availableHeight = Math.max(1, height);
      const nextWidth = Math.min(
        900,
        availableWidth,
        availableHeight * pageAspect,
      );

      setPageWidth(Math.max(1, Math.floor(nextWidth)));
    };

    const observer = new ResizeObserver(updateSize);
    observer.observe(bookArea);
    updateSize();

    return () => observer.disconnect();
  }, [pageAspect]);

  const onDocumentLoadError = useCallback((error) => {
    console.error("PDF load error:", error);
    setLoadError(error);
    setNumPages(null);
  }, []);

  const onDocumentLoadSuccess = useCallback(
    async (pdf) => {
      setLoadError(null);
      setNumPages(pdf.numPages);
      setActivePage(0);

      try {
        const firstPage = await pdf.getPage(1);
        const { width, height } = firstPage.getViewport({ scale: 1 });
        if (width <= 0 || height <= 0) {
          throw new Error("The first PDF page has invalid dimensions");
        }
        setPageAspect(width / height);
      } catch (error) {
        onDocumentLoadError(error);
      }
    },
    [onDocumentLoadError],
  );

  const handlePrint = () => {
    const printWindow = window.open(pdfUrl, "_blank", "noopener,noreferrer");
    if (printWindow) {
      printWindow.addEventListener("load", () => printWindow.print(), { once: true });
    }
  };

  const zoomIn = () => setZoom((z) => Math.min(1.6, +(z + 0.1).toFixed(1)));
  const zoomOut = () => setZoom((z) => Math.max(0.7, +(z - 0.1).toFixed(1)));

  const zoomedPageWidth = Math.round(pageWidth * zoom);
  const zoomedPageHeight = Math.round(zoomedPageWidth / pageAspect);

  const pages = useMemo(
    () =>
      Array.from({ length: numPages ?? 0 }, (_, index) => (
        <PdfPage key={`page_${index + 1}`}>
          <Page
            pageNumber={index + 1}
            width={zoomedPageWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            devicePixelRatio={Math.min(window.devicePixelRatio || 1, 1.5)}
            loading={<div className="pdf-page-loading" />}
          />
          <p className="pdf-page-number">
            {index + 1} / {numPages}
          </p>
        </PdfPage>
      )),
    [numPages, zoomedPageWidth],
  );

  return (
    <div className="pdf-flip-viewer flex h-full min-h-0 w-full flex-col">
      {/* Toolbar */}
      <div className="mb-2 flex shrink-0 items-center justify-between gap-3 border-b border-neutral-200 px-1 pb-2 md:px-2">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={zoomOut}
            disabled={zoom <= 0.7}
            className="rounded-full p-2 text-neutral-600 transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Zoom out"
          >
            <FaMinus size={12} />
          </button>
          <span className="min-w-12 text-center text-xs font-medium text-neutral-600">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={zoomIn}
            disabled={zoom >= 1.6}
            className="rounded-full p-2 text-neutral-600 transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Zoom in"
          >
            <FaPlus size={12} />
          </button>
        </div>

        <div className="flex items-center gap-1">
          <a
            href={pdfUrl}
            download
            className="rounded-full p-2 text-neutral-600 transition hover:bg-neutral-200"
            aria-label="Download"
            title="Download"
          >
            <FaDownload size={14} />
          </a>
          <button
            type="button"
            onClick={handlePrint}
            className="rounded-full p-2 text-neutral-600 transition hover:bg-neutral-200"
            aria-label="Print"
            title="Print"
          >
            <FaPrint size={14} />
          </button>
        </div>
      </div>

      {/* Book area – this is the only flex-1 region */}
      <div
        ref={bookAreaRef}
        className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto"
      >
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={
            <p className="text-sm text-neutral-500">Opening catalogue...</p>
          }
          error={
            <p className="max-w-sm text-center text-sm text-red-600">
              This catalogue could not be opened. Please try again later.
            </p>
          }
        >
          {numPages && (
            <HTMLFlipBook
              width={zoomedPageWidth}
              height={zoomedPageHeight}
              size="fixed"
              style={{ maxHeight: "none" }}
              minWidth={Math.min(180, zoomedPageWidth)}
              maxWidth={1200}
              minHeight={Math.min(250, zoomedPageHeight)}
              maxHeight={1800}
              usePortrait={isPortrait}
              maxShadowOpacity={0.4}
              showCover={true}
              mobileScrollSupport={true}
              ref={bookRef}
              startPage={0}
              useMouseEvents={true}
              flippingTime={700}
              drawShadow={true}
              onFlip={(e) => setActivePage(e.data)}
              className="pdf-flip-book shadow-xl"
            >
              {pages}
            </HTMLFlipBook>
          )}
        </Document>
      </div>

      {/* Controls – always visible, never push the book off-screen */}
      {numPages && (
        <div className="mt-3 flex shrink-0 items-center justify-center gap-5 pb-1">
          <button
            onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
            className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
          >
            ← Previous
          </button>
          <span className="text-sm font-medium text-neutral-600">
            {activePage + 1} – {Math.min(activePage + (isPortrait ? 1 : 2), numPages)} / {numPages}
          </span>
          <button
            onClick={() => bookRef.current?.pageFlip()?.flipNext()}
            className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
          >
            Next →
          </button>
        </div>
      )}

      {loadError && !numPages && (
        <p className="mt-2 text-center text-sm text-red-600">
          This catalogue could not be opened. Please try again later.
        </p>
      )}
    </div>
  );
}