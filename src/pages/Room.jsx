import {useState} from "react";
import {translateApi} from "../api/api";
import styles from "./Home.module.css";

export default function Room() {
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");

  const handleTranslate = async () => {
    try {
      const result = await translateApi("ko", "en", input);
      setTranslated(result);
    } catch (e) {
      alert("번역 중 오류가 발생했습니다.");
    }
  };
  return (
    <div className={styles.Container}>
      <h2>NMT 번역 테스트</h2>
      <textarea
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="번역할 문장을 입력하세요"
      />
      <br />
      <button onClick={handleTranslate}>번역하기</button>
      {translated && (
        <div>
          <h3>번역 결과:</h3>
          <p>{translated}</p>
        </div>
      )}
    </div>
  );
}
