import {useState} from "react";
import styles from "./ModalContent.module.css";
import ModalFirst from "./ModalFirst";
import ModalSecond from "./ModalSecond";
import ModalThird from "./ModalThird";
import {SmallCloseIcon} from "../../../assets/icons/SmallCloseIcon";
import {CheckIcon} from "../../../assets/icons/CheckIcon";
import {useTranslation} from "react-i18next";

export default function ModalContent({setIsOpen}) {
  const {t} = useTranslation();
  const [step, setStep] = useState(1);
  const [qrName, setQrName] = useState("");
  const [qrActivity, setQrActivity] = useState("");
  const [date, setDate] = useState("");
  const [headquarters, setHeadquarters] = useState("");
  const [field, setField] = useState("");
  const [isClicked, setIsClicked] = useState([]);
  const [isToggle, setIsToggle] = useState(`${t("writing")}`);

  return (
    <section className={styles.Container}>
      <div className={styles.Header}>
        <p className={styles.Title}>{t("create")}</p>
        <button onClick={() => setIsOpen(false)} className={styles.CloseButton}>
          <SmallCloseIcon />
        </button>
      </div>
      <div className={styles.Status}>
        <div className={styles.StatusContainer}>
          <div className={`${styles.StatusNumber} ${step >= 1 && styles.StatusCurrent}`}>
            {step > 1 ? <CheckIcon /> : 1}
          </div>
          <p>{t("information")}</p>
          <p className={styles.StatusDescription}>{t("room_information")}</p>
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
          <p>{t("activity_lang")}</p>
          <p className={styles.StatusDescription}>{t("setting_select")}</p>
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
          <p>{t("share")}</p>
          <p className={styles.StatusDescription}>{t("qr_create")}</p>
        </div>
      </div>
      {step === 1 ? (
        <ModalFirst
          setQrContent={setQrName}
          setDate={setDate}
          setHeadquarters={setHeadquarters}
          setField={setField}
        />
      ) : step === 2 ? (
        <ModalSecond
          setIsClicked={setIsClicked}
          isClicked={isClicked}
          setQrActivity={setQrActivity}
          setIsToggle={setIsToggle}
          isToggle={isToggle}
        />
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
          {t("cancel")}
        </button>
        <div className={styles.NextButtonContainer}>
          {step > 1 && (
            <button
              className={styles.PrevButton}
              onClick={() => {
                setStep((prev) => prev - 1);
              }}
            >
              {t("prev")}
            </button>
          )}
          <button
            className={styles.NextButton}
            onClick={() => {
              if (step === 3) {
                localStorage.setItem("translateRoom", {
                  qrName: qrName,
                  qrActivity: qrActivity,
                  date: date,
                  headquarters: headquarters,
                  field: field,
                  isClicked: isClicked,
                  isToggle: isToggle,
                });
                setIsOpen(false);
              } else {
                setStep((prev) => prev + 1);
              }
            }}
          >
            {step === 3 ? `${t("create")}` : `${t("next")}`}
          </button>
        </div>
      </div>
    </section>
  );
}
