import { createContext, useContext } from "react";

export const BioContext = createContext();

export const BioProvide = ({ children }) => {
  let title = "Welcome to React Custom Hook";

  return (
    <BioContext.Provider value={{ title }}>
      {children}
    </BioContext.Provider>
  );
};

// Custom Hook with extra safety check
export const useBioContext = () => {
  const context = useContext(BioContext);

  if (!context) {
    throw new Error("useBioContext must be used within a BioProvide");
  }

  return context;
};