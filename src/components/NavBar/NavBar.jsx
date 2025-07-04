import {AlarmIcon} from "../../assets/icons/AlarmIcon";
import {LoginIcon} from "../../assets/icons/LoginIcon";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.Container}>
      <div className={styles.LogoWrapper}>
        <div className={styles.LogoSection}>s</div>
        <div>SMARTy 번역 시스템</div>
      </div>
      <div className={styles.AlarmSection}>
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
