import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert ({synchronize}){

    const {show, toggleShow} = useStorageListener(synchronize);

    if (show){
        return (
            <div>
                <p>Something has changed</p>
                <button onClick={toggleShow}>Reload</button>
            </div>
        )
    } else {
        return null
    }
}



export {ChangeAlert }