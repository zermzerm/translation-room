import styles from "./Content.module.css";
import {ResetIcon} from "../../assets/icons/ResetIcon";
import DropDown from "../common/DropDown";

export default function Content() {
  return (
    <section className={styles.Container}>
      <div className={styles.Header}>
        <div className={styles.Title}>번역방 목록</div>
        <button className={styles.Button}>
          <ResetIcon />
          <p>필터 초기화</p>
        </button>
      </div>
      <div>
        <input className={styles.Input} placeholder="방이름, 본부, 현장명으로 검색..." />
        <div className={styles.DropDownWrapper}>
          <DropDown type="headquarter" />
          <DropDown type="field" />
          <DropDown type="activity" />
          <DropDown type="date" />
          <DropDown type="status" />
        </div>
      </div>
    </section>
  );
}
