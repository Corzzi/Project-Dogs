import React from "react";
import { USER_POST } from "../../api";
import Error from "../../Helper/Error/Error";
import Head from "../../Helper/Head/Head";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Button from "../Form/Button";
import Input from "../Form/Input";

const LoginRegister = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const { loginUser } = React.useContext(UserContext);
  const { request, loading, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) loginUser(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head
        title="Crie sua conta"
        description={`Página para registrar usuário`}
      />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        {error && <Error error={error} />}
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
      </form>
    </section>
  );
};

export default LoginRegister;
