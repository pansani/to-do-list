import { useState } from "react";
import Task from "./Task";
import styles from "./TasksContainer.module.css";
import { ClipboardText } from "phosphor-react";

interface TasksContainerProps {
  taskContent: string;
  numberOfTasks: number;
  numberOfConcludedTasks: number;
}

export default function TasksContainer({
  taskContent,
  numberOfTasks,
  numberOfConcludedTasks,
}: TasksContainerProps) {
  const [tasks, setTasks] = useState("");

  return (
    <div className={styles.tasksComponent}>
      <div className={styles.tasksContainerData}>
        <p className={styles.tasksCreatedText}>
          {" "}
          Tarefas Criadas
          <div className={styles.numberTasksCreated}>
            <p>{numberOfTasks}</p>
          </div>
        </p>
        <p className={styles.tasksMadeText}>
          {" "}
          Concluidas
          <div className={styles.numberMadeTasks}>
            <p>
              {numberOfTasks} de {numberOfConcludedTasks}
            </p>
          </div>
        </p>
      </div>
      <div className={styles.tasksContainer}>
        {tasks === "" ? (
          <div className={styles.noTasksContainer}>
            <ClipboardText size={70} className={styles.clipboardIcon} />
            <p className={styles.firstTextNoText}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          tasks.map((task) => <Task key={task.id} />)
        )}
      </div>
    </div>
  );
}
