import React, { useEffect, useState } from "react";
import { useTodos } from "./useTodos";
import "./App.css";
import { CreateTodoItem } from "../CreateTodoItem";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function App() {
  const {
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
  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList>
        {error && <p>Error</p>}
        {loading && <p>Loading...</p>}
        {!loading && !searchedTodos.length && <p>No items in the list</p>}

        {searchedTodos.map((item, index) => (
          <TodoItem
            key={index}
            text={item.text}
            completed={item.completed}
            onCompletedClick={() => completeTodo(index)}
            onDeleteTodoItem={() => deleteTodo(index)}
          />
        ))}
      </TodoList>
      <CreateTodoItem openModal={openModal} setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
          <TodoForm
            setOpenModal={setOpenModal}
            addItemTodoList={addItemTodoList}
          />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default App;
