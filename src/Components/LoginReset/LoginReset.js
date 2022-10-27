import React from "react";
import { useNavigate } from "react-router-dom";
import Error from "../../Helper/Error/Error";
import Head from "../../Helper/Head/Head";
import useForm from "../../Hooks/useForm";
import useSearchParams from "../../Hooks/useSearchParams";
import { useResetPasswordMutation } from "../../Mutations/useResetPasswordMutation";
import Button from "../Form/Button";
import Input from "../Form/Input";

const LoginReset = () => {
  const { login, key } = useSearchParams();
  const password = useForm("password");
  const { loading, error, mutate } = useResetPasswordMutation({
    login,
    key,
    password: password.value,
  });
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { response } = await mutate();
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resetar senha" description={`Página para resetar senha`} />
      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginReset;
