import React, { useContext } from "react";
import { BankAccountContext } from "./BankAccountContext";
const AccountBalance = () => {
  const { accountState } = useContext(BankAccountContext);

  return (
    <div>
      <h2>Account Balance</h2>
      <div>balance: {accountState.balance}</div>
    </div>
  );
};

export default AccountBalance;
