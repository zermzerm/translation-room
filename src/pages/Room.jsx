import {useState} from "react";
import {translateApi} from "../api/api";
import styles from "./Room.module.css";
import {TableData} from "../constants/table";
import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {AlarmIcon} from "../assets/icons/AlarmIcon";
import {SettingIcon} from "../assets/icons/SettingIcon";
import {StartBigIcon} from "../assets/icons/StartBigIcon";
import {StopIcon} from "../assets/icons/StopIcon";
import {PauseBigIcon} from "../assets/icons/PauseBigIcon";
import {UploadIcon} from "../assets/icons/UploadIcon";
import {DownloadBigIcon} from "../assets/icons/DownloadBigIcon";
import {DocumentStandardIcon} from "../assets/icons/DocumentStandardIcon";
import {LanguageIcon} from "../assets/icons/LanguageIcon";

export default function Room() {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const params = useParams();
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");
  const [isTranslation, setIsTranslation] = useState(false);

  const filterData = TableData.filter((el) => el.id === +params.id)[0];

  const handleTranslate = async () => {
    try {
      const result = await translateApi("ko", "ja", input);
      setTranslated(result);
    } catch (e) {
      alert("번역 중 오류가 발생했습니다.");
    }
  };
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <button type="button" className={styles.BackButton} onClick={() => navigate("/")}>
          ← {t("back")}
        </button>
        <div className={styles.TitleWrapper}>
          <div className={styles.Title}>{filterData.roomName}</div>
          <div className={styles.Information}>
            {t(filterData.headquarter)} {t(filterData.field)} • {filterData.operationDate}
          </div>
        </div>
      </div>
      <div className={styles.Content}>
        <div className={styles.PageInfo}>
          <div className={styles.PrevPage} onClick={() => navigate("/")}>
            SMARTok({t("real_time_translation")})
          </div>
          <div>&gt;</div>
          <div>{filterData.roomName}</div>
        </div>
        <div className={styles.ContentStatus}>
          <div className={styles.StatusActivity}>
            <div className={styles.Activity}>{t(filterData.activity)}</div>
            <div>
              {t(filterData.headquarter)} {t(filterData.field)}
            </div>
          </div>
          <div>{filterData.operationDate}</div>
        </div>
        <div className={styles.ContentHeader}>
          <div className={styles.StartButtonWrapper}>
            <button
              onClick={() => setIsTranslation((prev) => !prev)}
              className={isTranslation ? styles.Stop : styles.Start}
            >
              {isTranslation ? <PauseBigIcon /> : <StartBigIcon />}
              {isTranslation ? <p>{t("stopButton")}</p> : <p>{t("startButton")}</p>}
            </button>
            <button
              onClick={() => setIsTranslation((prev) => !prev)}
              className={isTranslation ? styles.TransStop : styles.TransStart}
            >
              <StopIcon />
              <p>{t("quit_translation")}</p>
            </button>
            <div className={styles.TransStatus}>
              {isTranslation ? t("being_translated") : t("waiting")}
            </div>
          </div>
          <div className={styles.SettingWrapper}>
            <div className={styles.Setting}>
              <AlarmIcon />
              <p>{t("announcement")}</p>
            </div>
            <div className={styles.Setting}>
              <SettingIcon />
              <p>{t("setting")}</p>
            </div>
            <div className={styles.Setting}>
              <DocumentStandardIcon />
              <p>{t("summary")}</p>
            </div>
          </div>
        </div>
        <div>
          <div>pdf뷰어</div>
          <div>
            <div>
              <div>{t("korean")}</div>
              <div>{t("korean")}</div>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <div>{t("translation")}</div>
              <div>{t("korean")}</div>
            </div>
            <div>ENG (English)</div>
            <div>CHN (中文)</div>
            <div>THA (ไทย)</div>
          </div>
        </div>
        <div className={styles.ContentHeader}>
          <div className={styles.LanguageContainer}>
            <div className={styles.SelectedLanguage}>
              <LanguageIcon />
              <p>{t("selected_lang")}</p>
            </div>
            <div className={styles.LanguageWrapper}>
              {filterData.lang.map((lang) => (
                <div key={lang} className={styles.Language}>
                  {lang}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.SettingWrapper}>
            <div className={styles.Setting}>
              <UploadIcon />
              <p>{t("upload")}</p>
            </div>
            <div className={styles.Setting}>
              <DownloadBigIcon />
              <p>{t("export")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className={styles.Container}>
    //   <h2>번역 테스트</h2>
    //   <textarea
    //     rows={4}
    //     value={input}
    //     onChange={(e) => setInput(e.target.value)}
    //     placeholder="번역할 문장을 입력하세요"
    //   />
    //   <br />
    //   <button onClick={handleTranslate} style={{border: "1px solid #000"}}>
    //     번역하기
    //   </button>
    //   {translated && (
    //     <div>
    //       <h3>번역 결과:</h3>
    //       <p>{translated}</p>
    //     </div>
    //   )}
    // </div>
  );
}
