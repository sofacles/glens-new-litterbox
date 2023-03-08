import React from "react";
import { Login } from "./Login";

const HomePage = () => {
  return (
    <div>
      <span>
        <Login userName="Art" isLoggedIn={false} />
      </span>
      home{" "}
    </div>
  );
};

export { HomePage };
