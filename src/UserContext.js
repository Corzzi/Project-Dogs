import React from "react";
import { useNavigate } from "react-router-dom";
import apiFetch from "./Utils/apiFetch";

export const UserContext = React.createContext();
export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const nav = useNavigate();

  const logout = React.useCallback(() => {
    setData(null);
    setLogin(false);
    setLoading(false);
    setError(null);
    window.localStorage.removeItem("token");
    nav("/login");
  }, [nav]);

  async function getUser() {
    const response = await apiFetch(`api/user`, {
      authorized: true,
    });
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function loginUser(username, password) {
    try {
      setError(null);
      setLoading(true);
      const response = await apiFetch("jwt-auth/v1/token", {
        method: "POST",
        authorized: false,
        body: { username, password },
      });
      if (!response.ok) throw new Error(`Erro: ${response.statusText}`);
      const { token } = await response.json();
      window.localStorage.setItem("token", token);
      await getUser();
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const response = await apiFetch("jwt-auth/v1/token/validate", {
            method: "POST",
          });
          if (!response.ok) throw new Error("Token inválido");
          await getUser();
        } catch (err) {
          setError(err.message);
          logout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [logout]);

  return (
    <UserContext.Provider
      value={{ loginUser, logout, data, login, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
