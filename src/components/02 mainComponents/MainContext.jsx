import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  let [rangeValue, setRangeValue] = useState();
  let [moneyValue, setMoneyValue] = useState();
  let [billing, setBilling] = useState();
  return (
    <MainContext.Provider
      value={{
        rangeValue,
        setRangeValue,
        moneyValue,
        setMoneyValue,
        billing,
        setBilling,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
