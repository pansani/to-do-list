/** @format */

import { ChangeEvent, FormEvent, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TasksContainer from "./components/TasksContainer";
import "./global.css";

interface Task {
  id: number;
  content: string;
}

function App() {
  const [numberOfTasks, setNumberOfTasks] = useState(0);

  const [numberOfConcludedTasks, setNumberOfConcludedTasks] =
    useState(numberOfTasks);
  const updateNumberOfConcludedTasks = (newNumberOfConcludedTasks: number) => {
    setNumberOfConcludedTasks(newNumberOfConcludedTasks);
  };

  const initialTasks: Task[] = [];

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTaskContent, setNewTaskContent] = useState<string>("");

  const tasksLength = tasks.length + 1;

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskContent(event.target.value);
    console.log(newTaskContent);
  };

  const handleAddNewTask = (event: FormEvent) => {
    event.preventDefault();

    const newTask: Task = {
      id: tasks.length,
      content: newTaskContent,
    };

    setTasks((tasks) => [...tasks, newTask]);
    setNewTaskContent("");
    setNumberOfTasks(tasksLength);

    console.log(
      "Tasks:",
      tasks,
      "New Task Content:",
      newTaskContent,
      "New Tasks:",
      newTask,
      "Number of tasks:",
      numberOfTasks
    );
  };

  const deleteTask = (taskId: number) => {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(tasksWithoutDeletedOne);
    setNumberOfTasks(tasksLength - 2);
  };

  const checkTask = () => {
    setNumberOfConcludedTasks(
      (prevNumberOfConcludedTasks) => prevNumberOfConcludedTasks + 1
    );

    console.log("toguro eu te amo", numberOfConcludedTasks);
  };

  return (
    <>
      <Header />
      <AddTask
        onChange={handleNewTaskChange}
        onSubmit={handleAddNewTask}
        contentValue={newTaskContent}
      />
      <TasksContainer
        taskContent={newTaskContent}
        numberOfTasks={numberOfTasks}
        numberOfConcludedTasks={numberOfConcludedTasks}
        tasks={tasks}
        deleteTask={deleteTask}
        checkTask={checkTask}
        updateNumberOfConcludedTasks={updateNumberOfConcludedTasks}
        tasksLength={tasksLength}
      />
    </>
  );
}

export default App;
