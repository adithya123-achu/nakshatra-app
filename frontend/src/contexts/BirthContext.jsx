import { createContext, useEffect, useState } from "react";

export const BirthContext = createContext();

export const BirthProvider = ({ children }) => {

  const [birthData, setBirthData] = useState(() => {

    const savedReport = localStorage.getItem("astrologyReport");

    if (savedReport) {
      return JSON.parse(savedReport);
    }

    return null;

  });

  useEffect(() => {

    if (birthData) {

      localStorage.setItem(
        "astrologyReport",
        JSON.stringify(birthData)
      );

    }

  }, [birthData]);

  return (
    <BirthContext.Provider
      value={{
        birthData,
        setBirthData,
      }}
    >
      {children}
    </BirthContext.Provider>
  );

};