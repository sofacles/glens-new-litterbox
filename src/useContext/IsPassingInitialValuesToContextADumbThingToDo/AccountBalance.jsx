import React, { useContext } from "react";
import { BankAccountContextFactory } from "./BankAccountContext";
const AccountBalance = () => {
  const { BankAccountContext } = BankAccountContextFactory({
    balance: 1022.0,
    firstName: "Accountra",
    lastName: "Valencia",
  });
  const [state] = useContext(BankAccountContext);

  return (
    <div>
      <h2>Account Balance</h2>
      {/* Shows 1022, of course */}
      <div>balance: {state.balance}</div>
    </div>
  );
};

export default AccountBalance;
