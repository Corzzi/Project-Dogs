import React from "react";

const useSearchParams = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  return { login, key };
};

export default useSearchParams;
