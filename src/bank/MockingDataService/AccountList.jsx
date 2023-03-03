import React from "react";
import SoundPlayer from "./sound-player";

const AccountList = () => {
  const soundPlayer = new SoundPlayer();

  return (
    <table data-testid="account-list">
      <thead>
        <tr>
          <th>account number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{soundPlayer.playSoundFile("a.mp3")}</td>
        </tr>
      </tbody>
    </table>
  );
};

export { AccountList };
