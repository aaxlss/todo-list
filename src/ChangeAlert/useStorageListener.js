import React, { useState } from "react";

function useStorageListener(synchronize) {
  
    const [storageChange, setStorageChange] = useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    synchronize();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow,
  };
}

export { useStorageListener };
