import React from "react";
import { useDeletePhotoMutation } from "../../Mutations/useDeletePhotoMutation";
import styles from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  const { loading, mutate } = useDeletePhotoMutation(id);

  async function handleClick() {
    const confirm = window.confirm("Deseja realmente deletar a publicação");

    if (confirm) {
      const { response } = await mutate();
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletando...
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
