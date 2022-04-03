/*
 This is a pretend login/get Account kind of service that is either in the 
 logged in or logged out state. 
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
