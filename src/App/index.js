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
import { ChangeAlert  } from "../ChangeAlert";

const TodosError = () => <p>Error</p>;
const TodosLoading = () =>  <p>Loading...</p>;
const TodosEmpty = () => <p>No items in the list</p>;
const TodosSearchedEmpty = (searchedText) => <p>No items found for {searchedText}</p> 

function App() {
  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    synchronizeItem,
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
      <TodoHeader
        loading={loading}
      >
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onError={()=><TodosError/>}
        onLoading={()=><TodosLoading/>}
        onEmptyTodos={()=><TodosEmpty/>}
        onEmptySearchedTodos = {(text) =>TodosSearchedEmpty(text)}
        render={(item, index)=>(
          <TodoItem
            key={index}
            text={item.text}
            completed={item.completed}
            onCompletedClick={() => completeTodo(index)}
            onDeleteTodoItem={() => deleteTodo(index)}
          />
        )}
      />
      <CreateTodoItem openModal={openModal} setOpenModal={setOpenModal} />
      <ChangeAlert 
      synchronize={synchronizeItem}
      />
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
