import { Trash, Check } from "phosphor-react";
import styles from "./Task.module.css";
import { useState } from "react";

interface TaskProps {
  taskContent: string;
  onDelete: () => void;
  onClick: (taskId: number) => void;
  taskId: number;
  numberOfConcludedTasks: number;
  updateNumberOfConcludedTasks: (prevNumberOfConcludedTasks: number) => void;
}

export default function Task({
  taskContent,
  onDelete,
  onClick,
  taskId,
  numberOfConcludedTasks,
  updateNumberOfConcludedTasks,
}: TaskProps) {
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleClickCheckbox = () => {
    const newCheckBoxState = !checkboxChecked;
    setCheckboxChecked(newCheckBoxState);

    if (newCheckBoxState) {
      onClick(taskId);
    } else if (!newCheckBoxState) {
      updateNumberOfConcludedTasks(numberOfConcludedTasks - 1);
    }

    console.log(numberOfConcludedTasks);
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
          <Check
            size={15}
            className={styles.checkIcon}
            onClick={handleClickCheckbox}
          />
        ) : (
          ""
        )}
      </button>
      <div className={styles.textContainer}>
        <p
          className={`${styles.textContent} ${
            checkboxChecked ? styles.textContentActive : ""
          }`}
        >
          {taskContent}
        </p>
      </div>
      <Trash size={20} className={styles.trashCan} onClick={onDelete} />
    </div>
  );
}
