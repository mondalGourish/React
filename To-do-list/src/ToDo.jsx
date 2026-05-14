import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDo() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);

  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  //basically returns the array after removing the deleted element
  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      });
    });
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      });
    });
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      });
    });
  };

  let markAllAsDone = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      });
    });
  };
  return (
    <div>
      <br></br>
      <input
        placeholder="Enter tasks"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      &nbsp; &nbsp;
      <button onClick={addNewTask}>Add task</button>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>Tasks to do</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => upperCaseOne(todo.id)}>UpperCase one</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>UpperCase All</button>
      &nbsp; &nbsp; &nbsp;
      <button onClick={markAllAsDone}>Mark all Done</button>
    </div>
  );
}
