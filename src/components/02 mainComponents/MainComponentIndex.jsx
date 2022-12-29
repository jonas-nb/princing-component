import React from "react";
import BillingComponent from "./BillingComponent";
import Controller from "./Controller";
import MoneyComponent from "./MoneyComponent";

const MainComponentIndex = () => {
  return (
    <div>
      <h2>100k pageviews</h2>
      <Controller />
      <MoneyComponent />
      <BillingComponent />
    </div>
  );
};

export default MainComponentIndex;
