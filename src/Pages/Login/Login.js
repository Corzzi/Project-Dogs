import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../UserContext";
import NotFound from "../NotFound";
import styles from "./Login.module.css";
import LoginForgot from "./LoginForgot";
import LoginForm from "./LoginForm";
import LoginRegister from "./LoginRegister";
import LoginReset from "./LoginReset";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/my-account" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="register" element={<LoginRegister />} />
          <Route path="forgot" element={<LoginForgot />} />
          <Route path="reset/*" element={<LoginReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
