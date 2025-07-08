import {useState} from "react";
import styles from "./ModalContent.module.css";
import ModalFirst from "./ModalFirst";
import ModalSecond from "./ModalSecond";
import ModalThird from "./ModalThird";
import {SmallCloseIcon} from "../../../assets/icons/SmallCloseIcon";
import {CheckIcon} from "../../../assets/icons/CheckIcon";

export default function ModalContent({setIsOpen}) {
  const [step, setStep] = useState(1);
  const [qrName, setQrName] = useState("");
  const [qrActivity, setQrActivity] = useState("");

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
          <div className={`${styles.StatusNumber} ${step >= 1 && styles.StatusCurrent}`}>
            {step > 1 ? <CheckIcon /> : 1}
          </div>
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
          <div className={`${styles.StatusNumber} ${step >= 2 && styles.StatusCurrent}`}>
            {step > 2 ? <CheckIcon /> : 2}
          </div>
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
          <div className={`${styles.StatusNumber} ${step >= 3 && styles.StatusCurrent}`}>3</div>
          <p>공유</p>
          <p className={styles.StatusDescription}>QR 코드 생성</p>
        </div>
      </div>
      {step === 1 ? (
        <ModalFirst setQrContent={setQrName} />
      ) : step === 2 ? (
        <ModalSecond setQrActivity={setQrActivity} />
      ) : (
        <ModalThird qrCode={qrName + qrActivity} />
      )}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #dde0e5",
        }}
      />
      <div className={styles.ButtonContainer}>
        <button
          className={styles.CancelButton}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          취소
        </button>
        <div className={styles.NextButtonContainer}>
          {step > 1 && (
            <button
              className={styles.PrevButton}
              onClick={() => {
                setStep((prev) => prev - 1);
              }}
            >
              이전
            </button>
          )}
          <button
            className={styles.NextButton}
            onClick={() => {
              setStep((prev) => prev + 1);
            }}
          >
            {step === 3 ? "생성" : "다음"}
          </button>
        </div>
      </div>
    </section>
  );
}
