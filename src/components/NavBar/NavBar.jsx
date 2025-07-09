import {AlarmIcon} from "../../assets/icons/AlarmIcon";
import {LoginIcon} from "../../assets/icons/LoginIcon";
import styles from "./NavBar.module.css";
import {useTranslation} from "react-i18next";

export default function NavBar() {
  const {i18n} = useTranslation();
  const {t} = useTranslation();

  const handleChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.LogoWrapper}>
        <div className={styles.LogoSection}>s</div>
        <div>SMARTy {t("translation_system")}</div>
      </div>
      <div className={styles.AlarmSection}>
        <select onChange={handleChange} value={i18n.language} className={styles.SelectBox}>
          <option value="ko">한국어</option>
          <option value="en">English</option>
          <option value="zh">中文</option>
          <option value="ja">日本語</option>
        </select>
        <div className={styles.AlarmWrapper}>
          <AlarmIcon />
        </div>
        <div className={styles.AlarmWrapper}>
          <LoginIcon />
        </div>
      </div>
    </div>
  );
}
