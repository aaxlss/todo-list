import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { CreateTodoItem } from "../CreateTodoItem";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
    const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal } = useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoCounter  />
      <TodoSearch  />
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
      <CreateTodoItem />
      {openModal && (<Modal>
        <TodoForm/>
      </Modal>)}
      
    </React.Fragment>
  );
}

export { AppUI };
