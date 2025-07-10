import {useEffect, useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import styles from "./PdfContent.module.css";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.js`;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  const onLoadSuccess = ({numPages}) => {
    setNumPages(numPages);
  };

  const goPrevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const goNextPage = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    const baseHeight = 842;
    const targetHeight = 493;
    const heightScale = targetHeight / baseHeight;
    setScale(heightScale);
  }, []);

  return (
    <div className={styles.ViewerWrapper}>
      <button className={styles.NavButton} onClick={goPrevPage} disabled={pageNumber === 1}>
        &#x276E;
      </button>

      <div className={styles.PdfBox}>
        <Document file="/files/sample.pdf" onLoadSuccess={onLoadSuccess}>
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
        <div className={styles.PageInfo}>
          {pageNumber} / {numPages}
        </div>
      </div>

      <button className={styles.NavButton} onClick={goNextPage} disabled={pageNumber === numPages}>
        &#x276F;
      </button>
    </div>
  );
}
