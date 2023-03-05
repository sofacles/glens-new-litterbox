import React from "react";
import SoundPlayer from "./sound-player";
import Data from "../DataService/Data";

const AccountList = () => {
  const soundPlayer = new SoundPlayer();
  const data = new Data();

  return (
    <>
      <h1 data-testid="h1-1">{soundPlayer.playSoundFile("a.mp3")}</h1>
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
