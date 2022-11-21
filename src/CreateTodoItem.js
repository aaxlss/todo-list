import React from "react";
import "./CreateTodoItem.css"
import {useTodos} from './App/useTodos'


function CreateTodoItem({addItemTodoList, setOpenModal}){
    
    return(
        <button className="CreateTodoItem" onClick={() => setOpenModal(prev => !prev)}>+</button>
    );
}

export {CreateTodoItem}