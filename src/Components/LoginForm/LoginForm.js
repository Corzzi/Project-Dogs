import React from "react";
import { Link } from "react-router-dom";
import Error from "../../Helper/Error/index";
import Head from "../../Helper/Head/index";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Button from "../Button/index";
import Input from "../Input/index";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const { loginUser, loading, error } = React.useContext(UserContext);
  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      loginUser(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" description={`Página de login`} />
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input type="text" label="Usuário" name="username" {...username} />
        <Input type="password" label="Senha" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && "Dados incorretos."} />
      </form>
      <Link className={styles.btnForgot} to="/login/forgot">
        Esqueci a senha.
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to="/login/register">
          <Button>Cadastre-se</Button>
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
