import {useEffect, useRef, useState} from "react";
import {DropDownCheckUpIcon} from "../../assets/icons/DropDownCheckUpIcon";
import {DropDownCheckDownIcon} from "../../assets/icons/DropDownCheckDownIcon";
import * as optionData from "../../constants/options";
import styles from "./DropDown.module.css";
import {useTranslation} from "react-i18next";

export default function DropDown({type, width = false, setOption = ""}) {
  const {t} = useTranslation();
  const options = optionData[type];
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef(null);

  const selectOption = (current) => {
    setSelected(current);
    setOption(t(current));
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
      className={`${styles.Container} ${width && styles.ContainerWidth}`}
      ref={dropdownRef}
      onClick={(e) => {
        e.stopPropagation();
        setShowOptions((prev) => !prev);
      }}
    >
      <div className={styles.SelectBox}>{t(selected)}</div>

      {showOptions ? <DropDownCheckUpIcon /> : <DropDownCheckDownIcon />}

      {showOptions && (
        <ul className={`${styles.Ul} ${width && styles.UlWidth}`}>
          {options.map((option, idx) => (
            <li
              key={idx}
              className={`${styles.Li} ${width && styles.LiWidth}`}
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
              }}
            >
              <div className={styles.Element}>{t(option)}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
