import styles from "./Content.module.css";
import { ResetIcon } from "../../assets/icons/ResetIcon";
import { DateIcon } from "../../assets/icons/DateIcon";
import { DocumentIcon } from "../../assets/icons/DocumentIcon";
import { DownloadIcon } from "../../assets/icons/DownloadIcon";
import DropDown from "../common/DropDown";
import { TableData, TableHead } from "../../constants/table";
import StatusIcon from "../common/StatusIcon";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [option, setOption] = useState("");

  const resetData = () => {
    setSearchTerm("");
    setOption("");
  };

  const filterData = TableData.filter((data) => {
    const term = searchTerm.toLowerCase();
    return (
      t(data.headquarter).toLowerCase().includes(term) ||
      t(data.activity).toLowerCase().includes(term) ||
      t(data.field).toLowerCase().includes(term) ||
      data.roomName.toLowerCase().includes(term)
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
          <DropDown type="headquarter" setOption={setOption} />
          <DropDown type="field" setOption={setOption} />
          <DropDown type="activity" setOption={setOption} />
          <DropDown type="date" setOption={setOption} />
          <DropDown type="status" setOption={setOption} />
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
