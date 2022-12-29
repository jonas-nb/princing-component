import React, { useContext } from "react";
import { MainContext } from "./MainContext";

const MoneyComponent = () => {
  let { moneyValue } = useContext(MainContext);

  return (
    <div>
      <div>
        {moneyValue} <span>/ month</span>
      </div>
    </div>
  );
};

export default MoneyComponent;
