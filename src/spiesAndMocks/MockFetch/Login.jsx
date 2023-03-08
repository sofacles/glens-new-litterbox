import React, { useEffect, useRef, useState } from "react";

//OK, I wanted to do something to prevent this fetch from being called when the login/logout
//button is clicked
const Login = (props) => {
  const { isLoggedIn, userName } = props;
  const [reallyLoggedIn, setReallyLoggedIn] = useState(isLoggedIn);
  let bestFriend = useRef("Glen");

  useEffect(() => {
    if (!reallyLoggedIn) {
      fetch("https://randomuser.me/api")
        .then((resp, err) => {
          return resp.json();
        })
        .then((resp, err) => {
          if (resp) {
            // If you just write to a local variable, you'll get errors about the value being
            // lost on rerender.  How would I prove that?  This Login component is really just
            // a thing that reports about the logged in user.  I shouldn't have this fake call to a
            // login service here.  The component should actually be dumb and just take loggedIn
            // state and userName as props.
            // BUT - my goal was to show that you could mock out the network call.
            bestFriend.current = resp.results[0].name.first;
          }
        })
        .finally(() => {
          debugger;
        });
    }
  }, [reallyLoggedIn]);

  return (
    <div data-testid="login">
      <h3 data-testid="user-n-span">{userName}</h3>

      <div data-testid="best-friend">Best friend: {bestFriend.current}</div>
      <button
        onClick={(evt) => {
          if (reallyLoggedIn) {
            setReallyLoggedIn(false);
          } else {
            setReallyLoggedIn(true);
          }
        }}
        data-testid="login-button"
      >
        {reallyLoggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  );
};

export { Login };
