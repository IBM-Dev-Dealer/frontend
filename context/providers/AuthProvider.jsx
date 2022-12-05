import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { callAPI } from "../../utils/utils";
import { useNotifications } from "../hooks";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [loggedUserID, setLoggedUserID] = useState(null);
  const [loggedUserEmail, setLoggedUserEmail] = useState(null);

  const { notify } = useNotifications();

  const getUserID = async (email) => {
    const user = await (await callAPI(`/user/${email}`, null)).json();
    console.log("getUserID user", user);
    setLoggedUserID(user.id);
    return user;
  };

  const login = useCallback(async (email) => {
    try {
      const res = await getUserID(email);
      // console.log("zzz", res);
      setLoggedUserEmail(email);
      setLogged(true);
      return true;
    } catch (err) {
      notify({
        kind: "error",
        id: "failedLogin",
        message: "Login unsuccessful.",
      });
      return false;
    }
  }, []);
  const logout = useCallback(() => {
    setLogged(false);
    setLoggedUserID(null);
    setLoggedUserEmail(null);
  }, []);

  const ctx = {
    logged,
    loggedUserID,
    loggedUserEmail,
    login,
    logout,
  };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};
