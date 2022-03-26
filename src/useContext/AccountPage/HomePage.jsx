import React from "react";
import { AccountPage } from "./AccountPage";
import { BankAccountProvider } from "./BankAccountContext";

/**
 * I am getting both fake account information and fake logged in status from
 * BankService.  Let's have BankAccount provide us this stuff and in this component,
 * we call setState on BankAccountContext.  For some reason I want to simulate initializing
 * the context from the home page. 

 * I was goint to use Avatar to demonstrate that you can share some state in a context.  
 * BankService is a dummy service that returns account info from the login
 * method and empty account info
 * from the logout method, the provider provides everything you need to show/hide Account Balance
 * and toggle the "login"/"logout" text on the button inside <Avatar />.
 * So, have avatar tell AccountPage when to set the logged in/out state on BankAccountContext.
 * BankAccountContext knows whether it's logged in or not and exposes that in its 
 * exported state.
 */

const HomePage = () => {
  return (
    <BankAccountProvider>
      <div>
        <h2>Home Page</h2>
        <AccountPage />
      </div>
    </BankAccountProvider>
  );
};

export { HomePage };
