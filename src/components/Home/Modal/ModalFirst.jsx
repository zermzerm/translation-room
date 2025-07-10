import {useTranslation} from "react-i18next";
import styles from "./ModalContent.module.css";

export default function ModalFirst({setQrContent, setDate, setHeadquarters, setField}) {
  const {t} = useTranslation();

  return (
    <>
      <div className={styles.ContentContainer}>
        <div>
          <label className={styles.Label}>{t("room_name")} *</label>
          <input
            type="search"
            className={styles.Input}
            placeholder={t("room_name_placeholder")}
            onChange={(e) => setQrContent(e.target.value)}
          />
        </div>
        <div>
          <label className={styles.Label}>{t("operation_date")} *</label>
          <input type="date" className={styles.Input} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label className={styles.Label}>{t("headquarters")} *</label>
          <input
            type="search"
            className={styles.Input}
            placeholder={t("headquarters_placeholder")}
            onChange={(e) => setHeadquarters(e.target.value)}
          />
        </div>
        <div>
          <label className={styles.Label}>{t("field_name")} *</label>
          <input
            type="search"
            className={styles.Input}
            placeholder={t("field_name_placeholder")}
            onChange={(e) => setField(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
