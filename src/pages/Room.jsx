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
import {Language} from "../constants/language";
import PdfContent from "../components/Room/PdfContent";

export default function Room() {
  const {t} = useTranslation();
  const description = t("description");
  const navigate = useNavigate();
  const params = useParams();
  const [translated, setTranslated] = useState({});
  const [isTranslation, setIsTranslation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/sample.pdf";
    link.download = "sample.pdf";
    link.click();
  };

  const filterData = TableData.filter((el) => el.id === +params.id)[0];

  const handleTranslate = async (lang) => {
    const currentLang = localStorage.getItem("lang");
    setIsLoading(true);

    try {
      const result = await translateApi(currentLang, lang, description);
      setTranslated((prev) => ({...prev, [lang]: result}));
    } catch (e) {
      alert("오류!");
    } finally {
      setIsLoading(false);
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
            ({t("real_time_translation")})
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
              onClick={() => {
                setIsTranslation((prev) => !prev);
                if (!isTranslation) handleTranslate();
              }}
              className={isTranslation ? styles.Stop : styles.Start}
            >
              {isTranslation ? <PauseBigIcon /> : <StartBigIcon />}
              {isTranslation ? <p>{t("stopButton")}</p> : <p>{t("startButton")}</p>}
            </button>
            <button
              onClick={() => {
                if (isTranslation) setIsTranslation((prev) => !prev);
              }}
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
        <div className={styles.ScriptContent}>
          <div className={styles.PdfContainer}>
            <PdfContent />
          </div>
          <div className={styles.KoScriptContainer}>
            <div className={styles.KoScriptHeader}>
              <div>{t("korean")}</div>
              <div className={styles.RealTime}>{t("real_time")}</div>
            </div>
            <div className={styles.ScriptWrapper}>
              {description.split("\n").map((el, idx) => (
                <p key={idx} className={styles.Script}>
                  {el}
                </p>
              ))}
            </div>
          </div>
          <div className={styles.MultilingualContainer}>
            <div className={styles.MultilingualHeader}>
              <div>{t("translation")}</div>
              <div className={styles.RealTime}>{t("real_time")}</div>
            </div>
            <div className={styles.MultilingualWrapper}>
              {filterData.lang.map((el) => (
                <div className={styles.FirstLangScript} key={el}>
                  <div className={styles.FirstLangHeader}>
                    <p>{Language[el]}</p>
                    {/* filterDate.lang으로 map 돌려서 위의 시작하기 버튼 누르면 */}
                    {/* 한번에 세가지 번역돼서 아래에 표현하고 싶었으나, 해결안돼서 따로 버튼 만듦 */}
                    <button onClick={() => handleTranslate(el)} className={styles.TransButton}>
                      {isLoading ? "번역 중..." : "번역하기"}
                    </button>
                  </div>
                  <div className={styles.TransContent}>
                    {translated[el] ? (
                      translated[el].split("\n").map((lang, idx) => <p key={idx}>{lang}</p>)
                    ) : (
                      <p className={styles.NotTrans}>아직 번역되지 않았습니다.</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
            <div className={styles.Setting} onClick={handleDownload}>
              <DownloadBigIcon />
              <p>{t("export")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
