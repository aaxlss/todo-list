import React from "react";
import { withStorageListener } from "./withStorageListener";

function changeAlert({show, toggleShow}){
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

const ChangeAlertWithStorageListener = withStorageListener(changeAlert);

export {ChangeAlertWithStorageListener}