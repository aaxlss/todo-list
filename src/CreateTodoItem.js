import React from "react";
import "./CreateTodoItem.css"

const addNewItem = (text) => {
    alert(`${text}`)
}

function CreateTodoItem({addItemTodoList}){
    return(
        <button className="CreateTodoItem" onClick={addItemTodoList}>+</button>
    );
}

export {CreateTodoItem}