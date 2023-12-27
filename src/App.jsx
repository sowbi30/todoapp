import { useState } from "react";
import TaskInput from "./components/Content";
import TaskItem from "./components/TaskItem";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  const [toDoList, setTodoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false }
    setTodoList([...toDoList, newTask])
  }
  
  function saveTask(oldTaskName, newTaskName) {
    setTodoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === oldTaskName ? { ...task, taskName: newTaskName } : task
      )
    );
  }

  function deleteTask(deleteTaskName) {
    setTodoList(toDoList.filter(task =>
      task.taskName !== deleteTaskName))
  }

  function toggleCheck(taskName) {
    setTodoList((prevToDoList) => prevToDoList.map
      (task =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task)
    )
  }

  console.log(toDoList);
  return (
    <>
      <Header />
      <div className="container">
        <h1>ToDoApp</h1>

        <TaskInput addTask={addTask} />

        <div className="todoList">
          <span>To Do</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem
                task={task}
                key={key}
                deleteTask={deleteTask}
                toggleCheck={toggleCheck}
                saveTask={saveTask}
              />
            ))}
          </ul>
          {toDoList.length === 0 ? (<p className="notify">You are Done!</p>
          ) : null}
        </div>

      </div>

      <Footer toDoList={toDoList} />

    </>

  );
}

export default App;
