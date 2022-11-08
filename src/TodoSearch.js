import React from "react";
import "./TodoSearch.css";

const onChangeText = (event) => {
    console.log(event.target.value)
}

function TodoSearch() {
    return(
        <input className="TodoSearch" onChange={onChangeText}></input>
    )
}

export {TodoSearch}