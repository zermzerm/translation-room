import {QRCodeCanvas} from "qrcode.react";
import styles from "./ModalContent.module.css";
import {DownloadIcon} from "../../../assets/icons/DownloadIcon";

export default function ModalThird({qrCode}) {
  const handleDownloadClick = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = `qr-${qrCode}.png`;
    link.click();
  };

  return (
    <div className={styles.ContentContainer}>
      <div className={styles.QrWrapper}>
        <QRCodeCanvas value={qrCode} size={200} />
      </div>
      <button className={styles.QrDownload} onClick={handleDownloadClick}>
        <DownloadIcon /> <p>QR 다운로드</p>
      </button>
      <div>
        <p className={styles.QrDescription}>
          모바일에서 QR 코드를 스캔하여 번역방에 접속할 수 있습니다.
        </p>
        <p className={styles.QrDescriptionTwo}>또는 직접 접속: translate.smarty.co.kr</p>
      </div>
    </div>
  );
}
