import styles from "./StatusIcon.module.css";
import {PauseIcon} from "../../assets/icons/PauseIcon";
import {PlayIcon} from "../../assets/icons/PlayIcon";
import {SettingIcon} from "../../assets/icons/SettingIcon";
import {useState} from "react";
import Modal from "react-modal";
import ModalContent from "../Home/Modal/ModalContent";
import {useTranslation} from "react-i18next";

export default function StatusIcon({status, id = ""}) {
  const {t} = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.Container}>
      <span
        onClick={() => {
          if (status === "status.joined" || status === "status.start") {
            window.location.href = `/room/${id}`;
          }
        }}
        className={
          `${status}` === "status.operating"
            ? styles.Operation
            : `${status}` === "status.joined"
            ? styles.Participation
            : `${status}` === "status.start"
            ? styles.Start
            : `${status}` === "status.verifying"
            ? styles.Verification
            : `${status}` === "status.writing"
            ? styles.Writing
            : styles.Preparing
        }
      >
        {`${status}` === "status.joined" ? (
          <PauseIcon />
        ) : `${status}` === "status.start" ? (
          <PlayIcon />
        ) : (
          ""
        )}
        {t(status)}
      </span>
      {`${status}` === "status.joined" && (
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
