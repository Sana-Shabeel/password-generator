import React, { createContext, useContext, useState } from "react";

// Create a context for the counter
interface DisplayPassContextType {
  count: string;
}

const DisplayPassContext = createContext<CounterContextType | undefined>(
  undefined
);

// Create a CounterProvider component
const DisplayPassProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <DisplayPassContext.Provider value={{ count }}>
      {children}
    </DisplayPassContext.Provider>
  );
};
