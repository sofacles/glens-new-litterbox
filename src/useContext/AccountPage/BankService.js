/*
 This is a pretend login/get Account kind of service that is either in the 
 logged in or logged out state. 
I'm trying to figure out if this thing gets called all the time and whether I can just keep
state in a module on the client, or whether the fact that I import this module in a React 
component means it's going to keep getting loaded and I'll lose my isLoggedIn state.
*/

const login = (userName, pwd) => {
  if (userName === "James" && pwd === "Vesuvius") {
    return {
      balance: 800.0,
      firstName: "James",
      lastName: "Carter",
      isLoggedIn: true,
    };
  }
};

const logout = () => {
  return { isLoggedIn: false };
};

export { login, logout };
