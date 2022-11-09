import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = createContext();

function TodoProvider(props) {
  const {
    item: todos,
    setTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((item) => item.completed == true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (searchValue.length >= 1) {
    searchedTodos = todos?.filter((item) => {
      const lowerSearch = searchValue.toLocaleLowerCase();
      const lowerItemText = item.text.toLocaleLowerCase();
      return lowerItemText.includes(lowerSearch);
    });
  } else {
    searchedTodos = todos;
  }

  const addItemTodoList = () => {
    const newItem = {
      text: "new item",
      completed: false,
    };
    let newArray = todos;
    newArray.push(newItem);
    setTodos(newArray);
  };

  const completeTodo = (indexItem) => {
    todos[indexItem].completed = !todos[indexItem].completed;
    setTodos(todos);
  };

  const deleteTodo = (todoIndex) => {
    // old way to delete an item from the todo list array
    // settodos(todos.filter(item => item.text.toLocaleLowerCase() != todoItem.text.toLocaleLowerCase()))
    let newtodos = todos;
    newtodos.splice(todoIndex, 1);
    setTodos(newtodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
