import React, { useContext } from "react";
import "./CreateTodoItem.css"
import { TodoContext } from "./TodoContext";


function CreateTodoItem(){
    const {addItemTodoList, setOpenModal} = useContext(TodoContext);
    return(
        <button className="CreateTodoItem" onClick={() => setOpenModal(prev => !prev)}>+</button>
    );
}

export {CreateTodoItem}