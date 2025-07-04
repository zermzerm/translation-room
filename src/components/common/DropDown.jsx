import {useEffect, useRef, useState} from "react";
import styles from "./DropDown.module.css";

const headquarter = ["전체 본부", "대우건설", "본사", "서울본사"];

export default function DropDown(option) {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(headquarter[0]);
  const dropdownRef = useRef(null);

  console.log(selected);

  const selectOption = (current) => {
    setSelected(current);
    setShowOptions(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className={styles.Container}
      ref={dropdownRef}
      onClick={() => setShowOptions((prev) => !prev)}
    >
      <div className={styles.SelectBox}>{selected}</div>
      {showOptions && (
        <ul className={styles.Ul}>
          {headquarter.map((el, idx) => (
            <li
              key={idx}
              className={styles.Li}
              onClick={(e) => {
                e.stopPropagation();
                selectOption(el);
              }}
            >
              <div className={styles.Element}>{el}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
