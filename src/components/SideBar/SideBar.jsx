import {useTranslation} from "react-i18next";
import {GlobeIcon} from "../../assets/icons/GlobeIcon";
import {SettingIcon} from "../../assets/icons/SettingIcon";
import styles from "./SideBar.module.css";

export default function SideBar() {
  const {t} = useTranslation();

  return (
    <div className={styles.Container}>
      <div className={`${styles.SideBarSection} ${styles.firstSection}`}>
        <GlobeIcon />
        <p>{t("real_time_translation")}</p>
      </div>
      <div className={styles.SideBarSection}>
        <SettingIcon />
        <p>{t("standard")}</p>
      </div>
      <div className={styles.SideBarSection}>
        <p className={styles.SideBarIcon}>P</p>
        <p>{t("plan")}</p>
      </div>
      <div className={styles.SideBarSection}>
        <p className={styles.SideBarIcon}>D</p>
        <p>{t("operation")}</p>
      </div>
      <div className={styles.SideBarSection}>
        <p className={styles.SideBarIcon}>C</p>
        <p>{t("check")}</p>
      </div>
      <div className={styles.SideBarSection}>
        <p className={styles.SideBarIcon}>A</p>
        <p>{t("analyze")}</p>
      </div>
    </div>
  );
}
