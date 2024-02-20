/** @format */

import { ChangeEvent, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TasksContainer from "./components/TasksContainer";
import "./global.css";

function App() {
  const [taskContent, setTaskContent] = useState("");
  const [numberOfTasks, setNumberOfTasks] = useState(0);
  const [numberOfConcludedTasks, setNumberOfConcludedTasks] =
    useState(numberOfTasks);

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskContent("");
    setTaskContent(event.target.value);
  };

  const handleAddNewTask = () => {};

  return (
    <>
      <Header />
      <AddTask
        onChange={handleNewTaskChange}
        onSubmit={handleAddNewTask}
        contentValue={taskContent}
      />
      <TasksContainer
        taskContent={taskContent}
        numberOfTasks={numberOfTasks}
        numberOfConcludedTasks={numberOfConcludedTasks}
      />
    </>
  );
}

export default App;
