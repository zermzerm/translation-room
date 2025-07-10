import styles from "./Content.module.css";
import {ResetIcon} from "../../assets/icons/ResetIcon";
import {DateIcon} from "../../assets/icons/DateIcon";
import {DocumentIcon} from "../../assets/icons/DocumentIcon";
import {DownloadIcon} from "../../assets/icons/DownloadIcon";
import DropDown from "../common/DropDown";
import {TableData, TableHead} from "../../constants/table";
import StatusIcon from "../common/StatusIcon";
import {useState} from "react";
import {useTranslation} from "react-i18next";

export default function Content() {
  const {t} = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [headquarter, setHeadquarter] = useState("");
  const [field, setField] = useState("");
  const [activity, setActivity] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const resetData = () => {
    setSearchTerm("");
    setHeadquarter("");
    setField("");
    setActivity("");
    setDate("");
    setStatus("");
  };

  const filterData = TableData.filter((data) => {
    const term = searchTerm.toLowerCase();

    const matchesSearchTerm =
      t(data.headquarter).toLowerCase().includes(term) ||
      t(data.activity).toLowerCase().includes(term) ||
      t(data.field).toLowerCase().includes(term) ||
      data.roomName.toLowerCase().includes(term);

    const matchesHeadquarter = !headquarter || data.headquarter === headquarter;
    const matchesField = !field || data.field === field;
    const matchesActivity = !activity || data.activity === activity;
    const matchesDate = !date || data.operationDate === date;
    const matchesStatus = !status || data.status.includes(status);

    return (
      matchesSearchTerm &&
      matchesHeadquarter &&
      matchesField &&
      matchesActivity &&
      matchesDate &&
      matchesStatus
    );
  });

  return (
    <section className={styles.Container}>
      <div className={styles.Header}>
        <div className={styles.Title}>{t("room_list_title")}</div>
        <button className={styles.Button} onClick={resetData}>
          <ResetIcon />
          <p>{t("reset_filter")}</p>
        </button>
      </div>
      <div>
        <input
          type="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.Input}
          placeholder={t("search_input_placeholder")}
          value={searchTerm}
        />
        <div className={styles.DropDownWrapper}>
          <DropDown type="headquarter" setOption={setHeadquarter} />
          <DropDown type="field" setOption={setField} />
          <DropDown type="activity" setOption={setActivity} />
          <DropDown type="date" setOption={setDate} />
          <DropDown type="status" setOption={setStatus} />
        </div>
        <table className={styles.Table}>
          <thead>
            <tr className={styles.HeadRow}>
              {TableHead.map((head, idx) => (
                <th key={idx}>{t(head)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterData.map((data) => (
              <tr className={styles.Row} key={data.id}>
                <td>{t(data.id)}</td>
                <td>{t(data.headquarter)}</td>
                <td className={styles.Field}>{t(data.field)}</td>
                <td className={styles.RoomName}>{t(data.roomName)}</td>
                <td>
                  <span className={styles.Activity}>{t(data.activity)}</span>
                </td>
                <td className={styles.Date}>
                  <DateIcon />
                  <span>{t(data.startDate)}</span>
                </td>
                <td className={styles.Record}>
                  <a href="/files/plan.pptx" download={true}>
                    {data.record && (
                      <>
                        <DocumentIcon /> <DownloadIcon />
                      </>
                    )}

                    {t(data.record)}
                  </a>
                </td>
                <td className={styles.Data}>
                  <a href="/files/word.doc" download={true}>
                    {data.data && (
                      <>
                        <DocumentIcon /> <DownloadIcon />
                      </>
                    )}

                    {t(data.data)}
                  </a>
                </td>
                <td className={styles.Date}>
                  <DateIcon />
                  <span>{t(data.operationDate)}</span>
                </td>
                <td className={styles.Status}>
                  <div className={styles.StatusWrapper}>
                    {data.status.map((stt, idx) => (
                      <StatusIcon status={stt} id={data.id} key={idx} />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
