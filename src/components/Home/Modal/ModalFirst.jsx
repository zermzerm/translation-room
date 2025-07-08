import styles from "./ModalContent.module.css";

export default function ModalFirst({setQrContent}) {
  return (
    <>
      <div className={styles.ContentContainer}>
        <div>
          <label className={styles.Label}>방 이름 *</label>
          <input
            type="search"
            className={styles.Input}
            placeholder="번역방 이름을 입력하세요"
            onChange={(e) => setQrContent(e.target.value)}
          />
        </div>
        <div>
          <label className={styles.Label}>운영일자 *</label>
          <input type="search" className={styles.Input} placeholder="날짜" />
        </div>
        <div>
          <label className={styles.Label}>본부 *</label>
          <input type="search" className={styles.Input} placeholder="본부명을 입력하세요" />
        </div>
        <div>
          <label className={styles.Label}>현장명 *</label>
          <input type="search" className={styles.Input} placeholder="현장명을 입력하세요" />
        </div>
      </div>
    </>
  );
}
