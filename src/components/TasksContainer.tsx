import Task from "./Task";
import styles from "./TasksContainer.module.css";
import { ClipboardText } from "phosphor-react";

interface Task {
  id: number;
  content: string;
}

interface TasksContainerProps {
  taskContent: string;
  numberOfTasks: number;
  numberOfConcludedTasks: number;
  tasks: Task[];
  formSubmitted: boolean;
  deleteTask: (taskId: number) => any;
}

export default function TasksContainer({
  numberOfTasks,
  numberOfConcludedTasks,
  tasks,
  formSubmitted,
  deleteTask,
}: TasksContainerProps) {
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
              {numberOfConcludedTasks} de {numberOfTasks}
            </p>
          </div>
        </p>
      </div>
      <div className={styles.tasksContainer}>
        {formSubmitted === false ? (
          <div className={styles.noTasksContainer}>
            <ClipboardText size={70} className={styles.clipboardIcon} />
            <p className={styles.firstTextNoText}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          tasks.map((task) => (
            <Task
              onDelete={() => deleteTask(task.id)}
              key={task.id}
              taskContent={task.content}
            />
          ))
        )}
      </div>
    </div>
  );
}
