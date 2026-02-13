import React, { useMemo, useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Muhammad Iqbal - RESUME.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(0);
  const viewerRef = useRef(null);
  const [viewerWidth, setViewerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;

    const updateViewerWidth = () => setViewerWidth(el.clientWidth);
    updateViewerWidth();

    const ro = window.ResizeObserver
      ? new ResizeObserver(() => updateViewerWidth())
      : null;
    ro?.observe(el);

    window.addEventListener("resize", updateViewerWidth);
    return () => {
      window.removeEventListener("resize", updateViewerWidth);
      ro?.disconnect();
    };
  }, []);

  const pageWidth = useMemo(() => {
    const max = 980;
    const min = 320;
    const baseWidth = viewerWidth || width;
    const horizontalPadding = viewerWidth ? 56 : width < 576 ? 28 : 48;
    return Math.max(min, Math.min(max, baseWidth - horizontalPadding));
  }, [viewerWidth, width]);

  return (
    <Container fluid className="resume-section">
      <Particle />

      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={9}>
            <div className="resume-hero">
              <h1 className="resume-hero-title">Resume</h1>
              <p className="resume-hero-subtitle">
                View my full resume below or download the PDF.
              </p>
              <div className="resume-actions">
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="resume-download-btn"
                >
                  <AiOutlineDownload style={{ marginBottom: "2px" }} />
                  <span style={{ marginLeft: 10 }}>Download Resume</span>
                </Button>
              </div>
            </div>

            <div className="resume-viewer" ref={viewerRef}>
              <Document
                file={pdf}
                onLoadSuccess={({ numPages: loadedPages }) =>
                  setNumPages(loadedPages)
                }
                className="resume-document"
              >
                {Array.from({ length: numPages || 1 }, (_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <div className="resume-page" key={`resume-page-${pageNumber}`}>
                      <div className="resume-page-meta">
                        Page {pageNumber}
                        {numPages ? ` of ${numPages}` : ""}
                      </div>
                      <Page
                        pageNumber={pageNumber}
                        width={pageWidth}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </div>
                  );
                })}
              </Document>
            </div>

            <div className="resume-actions resume-actions-bottom">
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                rel="noreferrer"
                className="resume-download-btn"
              >
                <AiOutlineDownload style={{ marginBottom: "2px" }} />
                <span style={{ marginLeft: 10 }}>Download Resume</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
