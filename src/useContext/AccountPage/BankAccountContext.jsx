import React, { useState, Children } from "react";
const myAccount = {
  balance: 0,
  firstName: "Unset",
  lastName: "Unset",
};

export const BankAccountContext = React.createContext([myAccount]);

export const BankAccountProvider = ({ children }) => {
  const [state, setState] = useState(myAccount);
  return (
    <BankAccountContext.Provider value={[state, setState]}>
      {children}
    </BankAccountContext.Provider>
  );
};
