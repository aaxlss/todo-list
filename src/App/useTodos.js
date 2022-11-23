import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos,
    setTodos,
    loading,
    error,
    synchronizeItem
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((item) => item.completed == true).length;
  const totalTodos = todos.length;
  const [openModal, setOpenModal] = useState(false)
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

  const addItemTodoList = (text) => {
    const newItem = {
      text,
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

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal, 
    setOpenModal,
    addItemTodoList,
    synchronizeItem,
  }

  
}

export { useTodos };
