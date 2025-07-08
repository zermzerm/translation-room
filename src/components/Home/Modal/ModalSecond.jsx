import styles from "./ModalContent.module.css";
import DropDown from "../../common/DropDown";
import {useState} from "react";
import {CheckLangIcon} from "../../../assets/icons/CheckLangIcon";

const language = [
  {id: 1, lan: "영어"},
  {id: 2, lan: "중국어(간체)"},
  {id: 3, lan: "태국어"},
  {id: 4, lan: "러시아어"},
];

export default function ModalSecond({setQrActivity}) {
  const [isClicked, setIsClicked] = useState([]);
  const [isToggle, setIsToggle] = useState("작성중");

  const click = (lan) => {
    setIsClicked((prev) => (prev.includes(lan) ? prev.filter((x) => x !== lan) : [...prev, lan]));
  };
  return (
    <div className={styles.ContentContainer}>
      <div>
        <label className={styles.Label}>활동구분 *</label>
        <DropDown type="activity" width={true} setOption={setQrActivity} />
      </div>
      <div>
        <p className={styles.Label}>번역언어 선택 *</p>
        <div className={styles.LanguageWrapper}>
          {language.map((el) => (
            <div
              className={`${styles.Language} ${
                isClicked.includes(el.lan) && styles.ClickedLanguage
              }`}
              key={el.id}
              onClick={() => click(el.lan)}
            >
              <p>{el.lan}</p>
              <div>{isClicked.includes(el.lan) && <CheckLangIcon />}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.ClickedLangArr}>
        {isClicked.map((el) => (
          <div className={styles.ClickedLang}>{el}</div>
        ))}
      </div>
      <div>
        <label className={styles.Label}>운영상태 *</label>
        <div className={styles.OperationStatus}>
          {["작성중", "검증중", "운용"].map((status) => (
            <div className={styles.StatusToggleContainer}>
              <div
                className={`${styles.ToggleContainer} ${
                  isToggle === status && styles.ToggleWrapperChecked
                }`}
                key={status}
                onClick={() => setIsToggle(status)}
              >
                <div
                  className={`${styles.Toggle} ${isToggle === status && styles.ToggleChecked}`}
                />
              </div>
              <p>{status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
