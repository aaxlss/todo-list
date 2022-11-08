import React from "react";
import "./TodoCounter.css"

function TodoCounter({totalComplete, totalItems}){
    return (
        <h2 className="TodoCounter">Has completado {totalComplete} de {totalItems} tareas</h2>
    )
}

export {TodoCounter}