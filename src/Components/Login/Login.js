import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../UserContext";
import LoginForgot from "../LoginForgot/index";
import LoginForm from "../LoginForm/index";
import LoginRegister from "../LoginRegister/index";
import LoginReset from "../LoginReset/index";
import NotFound from "../NotFound";
import styles from "./Login.module.css";

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
          <Route path="reset" element={<LoginReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
