import React from "react";
import "./CreateTodoItem.css"

const addNewItem = (text) => {
    alert(`${text}`)
}

function CreateTodoItem(){
    return(
        <button className="CreateTodoItem" onClick={()=>addNewItem('Adding new item')}>+</button>
    );
}

export {CreateTodoItem}