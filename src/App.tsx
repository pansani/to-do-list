/** @format */

import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TasksContainer from "./components/TasksContainer";
import "./global.css";

function App() {
  return <>
    <Header/>
    <AddTask/>
    <TasksContainer/>
  </>;
}

export default App;
