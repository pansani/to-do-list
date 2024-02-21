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
  const initialTasks: Task[] = [];

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTaskContent, setNewTaskContent] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const tasksLenght = tasks.length + 1;

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
    setFormSubmitted(true);
    setNumberOfTasks(tasksLenght);

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
        formSubmitted={formSubmitted}
      />
    </>
  );
}

export default App;
