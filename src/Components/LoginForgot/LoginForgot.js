import React from "react";
import Error from "../../Helper/Error/index";
import Head from "../../Helper/Head/index";
import useForm from "../../Hooks/useForm";
import useForgotPasswordMutation from "../../Mutations/useForgotPasswordMutation";
import Button from "../Button/index";
import Input from "../Input/index";

const LoginForgot = () => {
  const login = useForm();
  const { data, loading, error, mutate } = useForgotPasswordMutation({
    login: login.value,
    url: window.location.href.replace("forgot", "reset"),
  });

  async function handleSubmit(event) {
    event.preventDefault();

    await mutate();
  }

  return (
    <section className="animeLeft">
      <Head
        title="Esqueceu a senha"
        description={`Página para recuperar senha`}
      />
      <h1 className="title">Esqueceu a senha?</h1>
      {data ? (
        <p style={{ color: "#4b1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" name="login" type="text" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginForgot;
