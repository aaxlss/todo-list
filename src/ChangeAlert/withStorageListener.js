import React, { useState } from "react";

function withStorageListener(WrapperComponent){
    return function WrapperComponentWithStorageListener(props){
        const [storageChange, setStorageChange] = useState(false);
        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1'){
                setStorageChange(true);
            }
        });

        const toggleShow = () => {
            console.log('changing toggle ');
            props.synchronize();
            setStorageChange(false);
        }

        return (
            <WrapperComponent
            show={storageChange}
            toggleShow={toggleShow}
            />
        )
    }
}

export {withStorageListener}