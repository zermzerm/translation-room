import styles from "./ModalContent.module.css";
import DropDown from "../../common/DropDown";
import {CheckLangIcon} from "../../../assets/icons/CheckLangIcon";
import {useTranslation} from "react-i18next";

export default function ModalSecond({
  setQrActivity,
  isClicked,
  setIsClicked,
  setIsToggle,
  isToggle,
}) {
  const {t} = useTranslation();

  const language = [
    {id: 1, lan: `${t("english")}`},
    {id: 2, lan: `${t("simplified_chinese")}`},
    {id: 3, lan: `${t("thai")}`},
    {id: 4, lan: `${t("russian")}`},
  ];

  const click = (lan) => {
    setIsClicked((prev) => (prev.includes(lan) ? prev.filter((x) => x !== lan) : [...prev, lan]));
  };
  return (
    <div className={styles.ContentContainer}>
      <div>
        <label className={styles.Label}>{t("activity_type")} *</label>
        <DropDown type="activity" width={true} setOption={setQrActivity} />
      </div>
      <div>
        <p className={styles.Label}>{t("select_lang")} *</p>
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
        <label className={styles.Label}>{t("operation_status")} *</label>
        <div className={styles.OperationStatus}>
          {[`${t("writing")}`, `${t("verifying")}`, `${t("operating")}`].map((status) => (
            <div className={styles.StatusToggleContainer} key={status}>
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
