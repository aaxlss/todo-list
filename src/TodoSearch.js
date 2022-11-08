import React, { useState } from "react";
import "./TodoSearch.css";



function TodoSearch({searchValue, setSearchValue}) {

    const onChangeText = (event) => {
        setSearchValue(event.target.value);
    }

    return(
        <input className="TodoSearch" value={searchValue} onChange={onChangeText}></input>
    )
}

export {TodoSearch}