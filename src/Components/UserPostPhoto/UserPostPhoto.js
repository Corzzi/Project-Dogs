import React from "react";
import { useNavigate } from "react-router-dom";
import Error from "../../Helper/Error/Error";
import Head from "../../Helper/Head/Head";
import useForm from "../../Hooks/useForm";
import { usePostPhotoMutation } from "../../Mutations/usePostPhotoMutation";
import Button from "../Form/Button";
import Input from "../Form/Input";
import styles from "./UserPostPhoto.module.css";

const UserPostPhoto = () => {
  const formData = new FormData();
  const name = useForm();
  const weight = useForm("number");
  const age = useForm("number");
  const [img, setImg] = React.useState({});
  const navigate = useNavigate();
  const { data, loading, error, mutate } = usePostPhotoMutation(formData);

  React.useEffect(() => {
    if (data) navigate("/my-account");
  }, [data, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();

    formData.append("img", img.raw);
    formData.append("nome", name.value);
    formData.append("peso", weight.value);
    formData.append("idade", age.value);

    mutate();
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.postPhoto} animeLeft`}>
      <Head
        title="Poste sua foto"
        description={`Página de postagem de fotos`}
      />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...name} />
        <Input label="Peso" type="number" name="weight" {...weight} />
        <Input label="Idade (anos)" type="number" name="age" {...age} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPostPhoto;
