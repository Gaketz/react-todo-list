import { useState } from "react";
import Task from "./TaskItem";

export default function TaskList() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function handleTaskChange(e) {
    setNewTask(e.target.value);
  }

  function handleDescriptionChange(e) {
    setNewDescription(e.target.value);
  }

  function addTask() {
    if (newTask === "") {
      alert("You cannot create empty task!")
    } else {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
        description: newDescription,
        completed: false,
      };
      setTodoList([...todoList, task]);
    }
  }

  function deleteTask(id) {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  function completeTask(id) {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          if (task.completed === false) {
            return { ...task, completed: true };
          } else {
            return { ...task, completed: false };
          }
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className="App card p-3">
      <h1 className="m-3 d-flex justify-content-center display-4">
        My ToDo List
      </h1>
      <div>
        <div>
          <form className="row g-3 p-3 d-flex justify-content-center">
            <div className="col-auto">
              <input
                className="form-control form-control-dark"
                placeholder="Task..."
                aria-label="Task"
                onChange={handleTaskChange}
              />
            </div>
            <div className="col-auto">
              <input
                className="form-control form-control-dark"
                placeholder="Description..."
                aria-label="Description"
                onChange={handleDescriptionChange}
              />
            </div>

            <div className="text-end col-auto">
              <button
                type="button"
                onClick={addTask}
                className="btn btn-warning"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="m-2">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              description={task.description}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}
