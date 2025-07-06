import Modal from "react-modal";
import {PlusIcon} from "../../assets/icons/PlusIcon";
import {CloseIcon} from "../../assets/icons/CloseIcon";
import styles from "./Header.module.css";
import {useState} from "react";

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
              width: "400px",
              height: "300px",
              margin: "auto",
              padding: "20px",
            },
          }}
        >
          <h2>모달 제목</h2>
          <p>여기에 내용을 넣으세요.</p>
          <button onClick={() => setIsOpen(false)}>닫기</button>
        </Modal>
      </div>
    </header>
  );
}
