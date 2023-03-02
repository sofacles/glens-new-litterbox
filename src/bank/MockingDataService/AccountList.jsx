import React from "react";
import Data from "../DataService/Data";

const AccountList = () => {
  debugger;
  const dataService = new Data();

  return (
    <table data-testid="account-list">
      <thead>
        <tr>
          <th>account number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{dataService.getAccountAt(0)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export { AccountList };
