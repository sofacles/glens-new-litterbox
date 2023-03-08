import React from "react";
import Data from "../DataService/Data";

const AccountList = () => {
  const data = new Data();

  return (
    <>
      <h1 data-testid="h1-1">Calling data to get accounts</h1>
      <table data-testid="account-list">
        <thead>
          <tr>
            <th>account number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.getAccountAt(1)} </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export { AccountList };
