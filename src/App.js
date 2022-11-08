import React from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoItem} from "./TodoItem";
import {TodoList} from "./TodoList";
import {CreateTodoItem} from "./CreateTodoItem";
import "./App.css";

const todo = [
  {
    text: "curso ecma",
    completed: true,
  },
  {
    text: "Curso javascript",
    completed: false,
  },
  {
    text: "Curso react",
    completed: false,
  },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todo.map((item, index) => (
          <TodoItem key={index} text={item.text} completed={item.completed}/>
        ))}
      </TodoList>
      <CreateTodoItem />
    </React.Fragment>
  );
}

export default App;
