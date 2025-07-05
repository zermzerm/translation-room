import {useEffect, useRef, useState} from "react";
import {DropDownCheckUpIcon} from "../../assets/icons/DropDownCheckUpIcon";
import {DropDownCheckDownIcon} from "../../assets/icons/DropDownCheckDownIcon";
import * as optionData from "../../constants/options";
import styles from "./DropDown.module.css";

export default function DropDown({type}) {
  const options = optionData[type]();
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef(null);

  const selectOption = (current) => {
    setSelected(current);
    setShowOptions(false);
  };
  console.log(selected);
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
      onClick={(e) => {
        e.stopPropagation();
        setShowOptions((prev) => !prev);
      }}
    >
      <div className={styles.SelectBox}>{selected}</div>
      {showOptions ? <DropDownCheckUpIcon /> : <DropDownCheckDownIcon />}

      {showOptions && (
        <ul className={styles.Ul}>
          {options.map((option, idx) => (
            <li
              key={idx}
              className={styles.Li}
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
              }}
            >
              <div className={styles.Element}>{option}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
