import { SmallCloseIcon } from "../../assets/icons/SmallCloseIcon";
import styles from "./ModalContent.module.css";

export default function ModalContent({ setIsOpen }) {
  return (
    <section className={styles.Container}>
      <div className={styles.Header}>
        <p className={styles.Title}>번역방 생성</p>
        <button onClick={() => setIsOpen(false)} className={styles.CloseButton}>
          <SmallCloseIcon />
        </button>
      </div>
      <div className={styles.Status}>
        <div className={styles.StatusContainer}>
          <div className={styles.StatusNumber}>1</div>
          <p>기본정보</p>
          <p className={styles.StatusDescription}>방 정보 입력</p>
        </div>
        <div
          style={{
            width: "15%",
            height: "1.75px",
            backgroundColor: "#dde0e5",
          }}
        ></div>
        <div className={styles.StatusContainer}>
          <div className={styles.StatusNumber}>2</div>
          <p>활동구분/언어</p>
          <p className={styles.StatusDescription}>설정 선택</p>
        </div>
        <div
          style={{
            width: "15%",
            height: "1px",
            backgroundColor: "#dde0e5",
          }}
        ></div>
        <div className={styles.StatusContainer}>
          <div className={styles.StatusNumber}>3</div>
          <p>공유</p>
          <p className={styles.StatusDescription}>QR 코드 생성</p>
        </div>
      </div>
      <div className={styles.InputContainer}>
        <div>
          <laber className={styles.Label}>방 이름 *</laber>
          <input
            type="search"
            className={styles.Input}
            placeholder="번역방 이름을 입력하세요"
          />
        </div>
        <div>
          <laber className={styles.Label}>운영일자 *</laber>
          <input type="search" className={styles.Input} placeholder="날짜" />
        </div>
        <div>
          <laber className={styles.Label}>본부 *</laber>
          <input
            type="search"
            className={styles.Input}
            placeholder="본부명을 입력하세요"
          />
        </div>
        <div>
          <laber className={styles.Label}>현장명 *</laber>
          <input
            type="search"
            className={styles.Input}
            placeholder="현장명을 입력하세요"
          />
        </div>
      </div>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #dde0e5",
        }}
      />
      <div className={styles.ButtonContainer}>
        <button className={styles.CancelButton}>취소</button>
        <button className={styles.NextButton}>다음</button>
      </div>
    </section>
  );
}
