import styles from "./AddTask.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent } from "react";

interface AddTaskProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  contentValue: string;
}

export default function AddTask({
  onChange,
  onSubmit,
  contentValue,
}: AddTaskProps) {
  return (
    <form className={styles.addTaskContainer} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.addTaskInput}
        onChange={onChange}
        value={contentValue}
      />

      <button type="submit" className={styles.addTaskButton}>
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
