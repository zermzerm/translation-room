import styles from "./StatusIcon.module.css";
import {PauseIcon} from "../../assets/icons/PauseIcon";
import {PlayIcon} from "../../assets/icons/PlayIcon";
import {SettingIcon} from "../../assets/icons/SettingIcon";

export default function StatusIcon({status}) {
  return (
    <div className={styles.Container}>
      <span
        className={
          `${status}` === "운용"
            ? styles.Operation
            : `${status}` === "참여중"
            ? styles.Participation
            : `${status}` === "시작하기"
            ? styles.Start
            : `${status}` === "검증중"
            ? styles.Verification
            : `${status}` === "작성중"
            ? styles.Writing
            : styles.Preparing
        }
      >
        {`${status}` === "참여중" ? <PauseIcon /> : `${status}` === "시작하기" ? <PlayIcon /> : ""}
        {status}
      </span>
      {`${status}` === "참여중" && (
        <span className={styles.Setting}>
          <SettingIcon />
        </span>
      )}
    </div>
  );
}
