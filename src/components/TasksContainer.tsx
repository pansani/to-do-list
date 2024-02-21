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
  deleteTask: (taskId: number) => any;
  checkTask: (taskId: number) => void;
  updateNumberOfConcludedTasks: (prevNumberOfConcludedTasks: number) => void;
  tasksLength: number;
}

export default function TasksContainer({
  numberOfTasks,
  numberOfConcludedTasks,
  tasks,

  deleteTask,
  checkTask,
  updateNumberOfConcludedTasks,
  tasksLength,
}: TasksContainerProps) {
  console.log("Tasks Length", tasksLength);
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
        {tasksLength - 1 === 0 ? (
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
              onClick={checkTask}
              taskId={task.id}
              numberOfConcludedTasks={numberOfConcludedTasks}
              updateNumberOfConcludedTasks={updateNumberOfConcludedTasks}
            />
          ))
        )}
      </div>
    </div>
  );
}
