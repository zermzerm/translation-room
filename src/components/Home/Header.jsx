import Modal from "react-modal";
import {PlusIcon} from "../../assets/icons/PlusIcon";
import styles from "./Header.module.css";
import {useState} from "react";
import ModalContent from "./Modal/ModalContent";

Modal.setAppElement("#root");

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.Container}>
      <div>
        <div className={styles.Title}>SMARTok (실시간 번역)</div>
        <div className={styles.Description}>실시간 다국어 번역 서비스를 관리합니다</div>
      </div>
      <div>
        <button className={styles.Button} onClick={() => setIsOpen(true)}>
          <PlusIcon />
          <p>번역방 생성</p>
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
