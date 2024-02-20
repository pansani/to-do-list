import { Trash, Check } from "phosphor-react";
import styles from "./Task.module.css";
import { useState } from "react";

export default function Task() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleClickCheckbox = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  return (
    <div className={styles.taskContainer}>
      <button
        type="button"
        className={
          checkboxChecked ? styles.taskCheckboxChecked : styles.taskCheckbox
        }
        onClick={handleClickCheckbox}
      >
        {checkboxChecked ? (
          <Check size={15} className={styles.checkIcon} />
        ) : (
          ""
        )}
      </button>
      <div className={styles.textContainer}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          molestias incidunt veniam ipsa temporibus, tenetur porro perspiciatis
          quidem.
        </p>
      </div>
      <Trash size={20} className={styles.trashCan} />
    </div>
  );
}
