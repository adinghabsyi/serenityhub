import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    email: sessionStorage.getItem("email-user") || "",
    username: sessionStorage.getItem("username-user") || "",
  });

  const updateUser = (email, username) => {
    setCurrentUser({ email, username });
    sessionStorage.setItem("email-user", email);
    sessionStorage.setItem("username-user", username);

    // Set a timeout to clear session storage after 15 minutes (900000 milliseconds)
    setTimeout(() => {
      sessionStorage.removeItem("email-user");
      sessionStorage.removeItem("username-user");
      setCurrentUser({ email: "", username: "" }); // Clear currentUser state as well
    }, 900000);
  };

  // Optionally clear session storage if the user logs out
  const clearUser = () => {
    sessionStorage.removeItem("email-user");
    sessionStorage.removeItem("username-user");
    setCurrentUser({ email: "", username: "" });
  };

  return (
    <UserContext.Provider value={{ currentUser, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
