import React, { useState } from "react";

const BankAccountContextFactory = (initialValue) => {
  /*
    I was going to just call setState and return this module's BankAccountContext 
    & BankAccountProvider, but you can only setState in a component, so can I 
    just declare and return them here?
    Wait.  What happens when two components want to use this factory?  Do they both pass
    in an initial value?  Can I have something like a static property that I check when 
    the factory gets called?  Why am I even doing this?  It seems like it's better to just
    export the context and the provider.

    Probably.  When do you expect to have the account information?  After you log in, I guess.
    Also, you probably wound't show the account information component at all till you have the 
    actual information. I mean, I could try to useRef or something in the provider.. Should I?
    I guess this idea is kinda dumb.  I will move on to a useContext example that gets the state
    from a service. 
  */
  console.log(
    `==== Inside BankAccountContextFactory.  InitialValue: ${JSON.stringify(
      initialValue
    )} ====`
  );
  console.log("");
  const BankAccountContext = React.createContext([initialValue]);

  const BankAccountProvider = ({ children }) => {
    const [state, setState] = useState(initialValue);
    return (
      <BankAccountContext.Provider value={[state, setState]}>
        {children}
      </BankAccountContext.Provider>
    );
  };
  return { BankAccountContext, BankAccountProvider };
};

export { BankAccountContextFactory };
