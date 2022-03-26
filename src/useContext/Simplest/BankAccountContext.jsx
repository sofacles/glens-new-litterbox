import React, { useState, Children } from "react";
const myAccount = {
  balance: 800.0,
  firstName: "James",
  lastName: "Carter",
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
