import React, { useState } from "react";

import "./TodoForm.css";
function TodoForm({ setOpenModal, addItemTodoList }) {
  const [textNewTodo, setTextNewTodo] = useState("");
  
  const onChange = (event) => {
    setTextNewTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addItemTodoList(textNewTodo);
    setOpenModal(false);
    setTextNewTodo("");
  };

  const onCancel = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Add New TODO Item</label>
      <textarea
        placeholder="new TODO item"
        value={textNewTodo}
        onChange={onChange}
      />
      <div className="Todo-Form-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Create
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
