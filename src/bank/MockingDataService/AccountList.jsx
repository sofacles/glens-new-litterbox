import React from "react";
import DataService from "../DataService/Data";

const AccountList = () => {
  debugger;
  const dataService = new DataService();
  const rows = [];
  dataService.accounts.forEach((acct) => {
    debugger;
    rows.push(
      <tr key={acct}>
        <td>{acct}</td>
      </tr>
    );
  });

  return (
    <table data-testid="account-list">
      <thead>
        <tr>
          <th>account number</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export { AccountList };
