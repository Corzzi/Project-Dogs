import Button from "Components/Button";
import Input from "Components/Input";
import Error from "Helper/Error";
import Head from "Helper/Head";
import useForm from "Hooks/useForm";
import { useRegisterUserMutation } from "Mutations/useRegisterUserMutation";
import React from "react";
import { UserContext } from "UserContext";

const LoginRegister = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const { loginUser } = React.useContext(UserContext);
  const { loading, error, mutate } = useRegisterUserMutation({
    username: username.value,
    email: email.value,
    password: password.value,
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const { response } = await mutate();
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
