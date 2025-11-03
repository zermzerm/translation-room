import {QRCodeCanvas} from "qrcode.react";
import styles from "./ModalContent.module.css";
import {DownloadIcon} from "../../../assets/icons/DownloadIcon";
import {useTranslation} from "react-i18next";

export default function ModalThird({qrCode}) {
  const {t} = useTranslation();
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
        <DownloadIcon /> <p>{t("qr_download")}</p>
      </button>
      <div>
        <p className={styles.QrDescription}>{t("qr_description")}</p>
        <p className={styles.QrDescriptionTwo}>{t("or_direct")}: translate.co.kr</p>
      </div>
    </div>
  );
}
