import React, { useContext } from "react";
import { BankAccountContext } from "./BankAccountContext";
const AccountBalance = () => {
  const [state] = useContext(BankAccountContext);

  return (
    <div>
      <h2>Account Balance</h2>
      <div>balance: {state.balance}</div>
    </div>
  );
};

export default AccountBalance;
