import styles from "./StatusIcon.module.css";

export default function StatusIcon({status}) {
  return (
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
      {status}
    </span>
  );
}
