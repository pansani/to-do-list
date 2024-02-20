import { Trash, Check } from "phosphor-react";
import styles from "./Task.module.css";
import { useState } from "react";

interface TaskProps {
  taskContent: string;
}

export default function Task({ taskContent }: TaskProps) {
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
        <p>{taskContent}</p>
      </div>
      <Trash size={20} className={styles.trashCan} />
    </div>
  );
}
