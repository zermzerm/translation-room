import styles from "./StatusIcon.module.css";
import {PauseIcon} from "../../assets/icons/PauseIcon";
import {PlayIcon} from "../../assets/icons/PlayIcon";
import {SettingIcon} from "../../assets/icons/SettingIcon";
import {useState} from "react";
import Modal from "react-modal";
import ModalContent from "../Home/Modal/ModalContent";

export default function StatusIcon({status, id = ""}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.Container}>
      <span
        onClick={() => {
          if (status === "참여중" || status === "시작하기") {
            window.location.href = `/room/${id}`;
          }
        }}
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
        <span className={styles.Setting} onClick={() => setIsOpen(true)}>
          <SettingIcon />
        </span>
      )}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "448px",
            height: "670px",
            margin: "auto",
            padding: "21px",
          },
        }}
      >
        <ModalContent setIsOpen={setIsOpen} />
      </Modal>
    </div>
  );
}
