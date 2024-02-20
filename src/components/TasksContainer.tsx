import Task from "./Task";
import styles from "./TasksContainer.module.css";

export default function TasksContainer() {
  return (
    <div className={styles.tasksComponent}>
      <div className={styles.tasksContainerData}>
        <p className={styles.tasksCreatedText}>
          {" "}
          Tarefas Criadas
          <div className={styles.numberTasksCreated}>
            <p>5</p>
          </div>
        </p>
        <p className={styles.tasksMadeText}>
          {" "}
          Concluidas
          <div className={styles.numberMadeTasks}>
            <p>2 de 5</p>
          </div>
        </p>
      </div>
      <div className={styles.tasksContainer}>
        <Task />
        <Task />
      </div>
    </div>
  );
}
