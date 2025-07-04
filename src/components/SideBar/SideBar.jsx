import {GlobeIcon} from "../../assets/icons/GlobeIcon";
import {SettingIcon} from "../../assets/icons/SettingIcon";
import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.Container}>
      <div className={`${styles.SideBarSection} ${styles.firstSection}`}>
        <GlobeIcon />
        <p>SMARTok(실시간 번역)</p>
      </div>
      <div className={styles.SideBarSection}>
        <SettingIcon />
        <p>기준</p>
      </div>
      <div className={styles.SideBarSection}>
        <p className={styles.SideBarIcon}>P</p>
        <p>계획</p>
      </div>
      <div className={styles.SideBarSection}>
        <p className={styles.SideBarIcon}>D</p>
        <p>운영</p>
      </div>
      <div className={styles.SideBarSection}>
        <p className={styles.SideBarIcon}>C</p>
        <p>점검</p>
      </div>
      <div className={styles.SideBarSection}>
        <p className={styles.SideBarIcon}>A</p>
        <p>분석</p>
      </div>
    </div>
  );
}
