import React, { createContext, useState } from "react";

// Crear el contexto
export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <TaskContext.Provider value={{ data, setData }}>
      {children}
    </TaskContext.Provider>
  );
};