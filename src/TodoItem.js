import React from "react";
import "./TodoItem.css";

const onCompletedItem = () => {
  alert('Item completed')
}

const onDeleteItem = () => {
  alert('Item deleted')
}

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={onCompletedItem}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={onDeleteItem}
      >X</span>
    </li>
  );
}

export { TodoItem };
