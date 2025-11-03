import Modal from "react-modal";
import {PlusIcon} from "../../assets/icons/PlusIcon";
import styles from "./Header.module.css";
import {useState} from "react";
import ModalContent from "./Modal/ModalContent";
import {useTranslation} from "react-i18next";

Modal.setAppElement("#root");

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const {t} = useTranslation();

  return (
    <header className={styles.Container}>
      <div>
        <div className={styles.Title}>({t("real_time_translation")})</div>
        <div className={styles.Description}>{t("real_time_description")}</div>
      </div>
      <div>
        <button className={styles.Button} onClick={() => setIsOpen(true)}>
          <PlusIcon />
          <p>{t("trans_room_create")}</p>
        </button>
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
    </header>
  );
}
