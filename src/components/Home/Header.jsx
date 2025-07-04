import {PlusIcon} from "../../assets/icons/PlusIcon";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.Container}>
      <div>
        <div className={styles.Title}>SMARTok (실시간 번역)</div>
        <div className={styles.Description}>실시간 다국어 번역 서비스를 관리합니다</div>
      </div>
      <div>
        <button className={styles.Button}>
          <PlusIcon />
          <p>번역방 생성</p>
        </button>
      </div>
    </div>
  );
}
