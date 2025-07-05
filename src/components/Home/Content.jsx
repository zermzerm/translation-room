import styles from "./Content.module.css";
import {ResetIcon} from "../../assets/icons/ResetIcon";
import {DateIcon} from "../../assets/icons/DateIcon";
import {DocumentIcon} from "../../assets/icons/DocumentIcon";
import {DownloadIcon} from "../../assets/icons/DownloadIcon";
import DropDown from "../common/DropDown";
import {TableData, TableHead} from "../../constants/table";
import StatusIcon from "../common/StatusIcon";

export default function Content() {
  return (
    <section className={styles.Container}>
      <div className={styles.Header}>
        <div className={styles.Title}>번역방 목록</div>
        <button className={styles.Button}>
          <ResetIcon />
          <p>필터 초기화</p>
        </button>
      </div>
      <div>
        <input className={styles.Input} placeholder="방이름, 본부, 현장명으로 검색..." />
        <div className={styles.DropDownWrapper}>
          <DropDown type="headquarter" />
          <DropDown type="field" />
          <DropDown type="activity" />
          <DropDown type="date" />
          <DropDown type="status" />
        </div>
        <table className={styles.Table}>
          <thead>
            <tr className={styles.HeadRow}>
              {TableHead.map((head, idx) => (
                <td key={idx}>{head}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {TableData.map((data) => (
              <tr className={styles.Row}>
                <td>{data.id}</td>
                <td>{data.headquarter}</td>
                <td className={styles.Field}>{data.field}</td>
                <td className={styles.RoomName}>{data.roomName}</td>
                <td>
                  <span className={styles.Activity}>{data.activity}</span>
                </td>
                <td className={styles.Date}>
                  <DateIcon />
                  <span>{data.startDate}</span>
                </td>
                <td className={styles.Record}>
                  {data.record && <DocumentIcon />}
                  <span>{data.record}</span>
                </td>
                <td className={styles.Data}>
                  {data.data && (
                    <>
                      <DocumentIcon /> <DownloadIcon />
                    </>
                  )}
                  <span>{data.data}</span>
                </td>
                <td className={styles.Date}>
                  <DateIcon />
                  <span>{data.operationDate}</span>
                </td>
                <td className={styles.Status}>
                  <div className={styles.StatusWrapper}>
                    {data.status.map((stt) => (
                      <StatusIcon status={stt} />
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
