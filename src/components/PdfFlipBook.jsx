'use client';

import React, { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { FaDownload, FaMinus, FaPlus, FaPrint } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const PdfPage = React.forwardRef((props, ref) => {
  return (
    <div className="pdf-flip-page" ref={ref}>
      <div className="pdf-flip-page-content">{props.children}</div>
    </div>
  );
});
PdfPage.displayName = "PdfPage";


export default function PdfFlipBook({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(320);
  const [loadError, setLoadError] = useState(null);
  const [activePage, setActivePage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isPortrait, setIsPortrait] = useState(false);
  const viewerRef = useRef(null);
  const bookAreaRef = useRef(null);
  const bookRef = useRef(null);

  useEffect(() => {
    const bookArea = bookAreaRef.current;
    if (!bookArea) return undefined;

    const updateSize = () => {
      const { width, height } = bookArea.getBoundingClientRect();
      const portrait = width < 720;
      setIsPortrait(portrait);
      const availableWidth = portrait ? width - 16 : (width - 32) / 2;
      const availableHeight = Math.max(1, height - 8);
      const pdfRatio = 0.707;
      const nextWidth = Math.max(1, Math.min(760, availableWidth, availableHeight * pdfRatio));

      setPageWidth(Math.floor(nextWidth));
    };

    const observer = new ResizeObserver(updateSize);
    observer.observe(bookArea);
    updateSize();
    return () => observer.disconnect();
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setLoadError(null);
    setNumPages(numPages);
    setActivePage(0);
  }

  function onDocumentLoadError(error) {
    setLoadError(error);
    setNumPages(null);
  }

  function handlePrint() {
    const printWindow = window.open(pdfUrl, "_blank", "noopener,noreferrer");
    if (printWindow) {
      printWindow.addEventListener("load", () => printWindow.print(), {
        once: true,
      });
    }
  }

  const zoomIn = () => setZoom((currentZoom) => Math.min(1.5, currentZoom + 0.1));
  const zoomOut = () => setZoom((currentZoom) => Math.max(0.8, currentZoom - 0.1));
  const zoomedPageWidth = Math.round(pageWidth * zoom);

  return (
    <div
      ref={viewerRef}
      className="pdf-flip-viewer flex min-h-0 w-full flex-1 flex-col items-center"
    >
      <div className="mb-3 flex w-full shrink-0 items-center justify-between gap-3 border-b border-neutral-200 px-2 pb-3 md:px-4">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={zoomOut}
            disabled={zoom <= 0.8}
            className="rounded-full p-2 text-neutral-600 transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Zoom out"
            title="Zoom out"
          >
            <FaMinus size={12} />
          </button>
          <span className="min-w-14 text-center text-xs font-medium text-neutral-600">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={zoomIn}
            disabled={zoom >= 1.5}
            className="rounded-full p-2 text-neutral-600 transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Zoom in"
            title="Zoom in"
          >
            <FaPlus size={12} />
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href={pdfUrl}
            download
            className="rounded-full p-2 text-neutral-600 transition hover:bg-neutral-200"
            aria-label="Download catalogue"
            title="Download catalogue"
          >
            <FaDownload size={14} />
          </a>
          <button
            type="button"
            onClick={handlePrint}
            className="rounded-full p-2 text-neutral-600 transition hover:bg-neutral-200"
            aria-label="Print catalogue"
            title="Print catalogue"
          >
            <FaPrint size={14} />
          </button>
        </div>
      </div>

      <div
        ref={bookAreaRef}
        className="flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden"
      >
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={<p className="text-sm text-neutral-500">Opening catalogue...</p>}
          error={
            <p className="max-w-sm text-center text-sm text-red-600">
              This catalogue could not be opened. Please try again later.
            </p>
          }
        >
          {numPages && (
            <HTMLFlipBook
              key={`${zoomedPageWidth}-${numPages}-${isPortrait}`}
              width={zoomedPageWidth}
              height={Math.round(zoomedPageWidth / 0.707)}
              size="stretch"
              minWidth={1}
              maxWidth={900}
              minHeight={1}
              maxHeight={1200}
              usePortrait={isPortrait}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              ref={bookRef}
              startPage={0}
              useMouseEvents={true}
              flippingTime={850}
              drawShadow={true}
              onFlip={(event) => setActivePage(event.data)}
              className="pdf-flip-book shadow-2xl"
            >
              {Array.from(new Array(numPages), (_, index) => (
                <PdfPage key={`page_${index + 1}`}>
                  {Math.abs(index - activePage) <= 1 ? (
                    <Page
                      pageNumber={index + 1}
                      width={zoomedPageWidth}
                      devicePixelRatio={1}
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                      loading={<div className="pdf-page-loading" />}
                    />
                  ) : (
                    <div className="pdf-page-loading" aria-hidden="true" />
                  )}
                  <p className="pdf-page-number">
                    {index + 1} / {numPages}
                  </p>
                </PdfPage>
              ))}
            </HTMLFlipBook>
          )}
        </Document>
      </div>

      {numPages && (
        <div className="mt-6 flex items-center gap-6">
          <button
            onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
            className="px-5 py-2.5 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-700 transition"
          >
            ← Previous
          </button>
          <span className="text-sm text-neutral-600 font-medium">
            {numPages} pages
          </span>
          <button
            onClick={() => bookRef.current?.pageFlip()?.flipNext()}
            className="px-5 py-2.5 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-700 transition"
          >
            Next →
          </button>
        </div>
      )}
      {loadError && !numPages && (
        <p className="mt-4 text-xs text-neutral-500">{pdfUrl}</p>
      )}
    </div>
  );
}