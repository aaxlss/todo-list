import React, { useContext } from "react";
import "./CreateTodoItem.css"
import { TodoContext } from "./TodoContext";
const addNewItem = (text) => {
    alert(`${text}`)
}

function CreateTodoItem(){
    const {addItemTodoList} = useContext(TodoContext);
    return(
        <button className="CreateTodoItem" onClick={addItemTodoList}>+</button>
    );
}

export {CreateTodoItem}