import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { callAPI } from "../../utils/utils";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [loggedUserID, setLoggedUserID] = useState(null);

  const getUserID = async (email) => {
    const user = await (await callAPI(`/user/${email}`, null)).json();
    console.log("getUserID user", user);
    setLoggedUserID(user.id);
  };

  const login = useCallback((email) => {
    getUserID(email);
    setLogged(true);
  }, []);
  const logout = useCallback(() => {
    setLogged(false);
    setLoggedUserID(null);
  }, []);

  const ctx = {
    logged,
    loggedUserID,
    login,
    logout,
  };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};
