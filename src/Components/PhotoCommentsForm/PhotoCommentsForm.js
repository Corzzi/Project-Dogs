import React from "react";
import { ReactComponent as Send } from "../../Assets/enviar.svg";
import Error from "../../Helper/Error/index";
import { usePostCommentMutation } from "../../Mutations/usePostCommentMutation";
import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, onSendComment, single }) => {
  const [comment, setComment] = React.useState("");
  const { error, mutate } = usePostCommentMutation(id, { comment });

  async function handleSubmit(event) {
    event.preventDefault();
    const { response, json } = await mutate();
    if (response.ok) {
      setComment("");
      onSendComment(json); // Tarefa 2
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <label>
        <span style={{ opacity: 0 }}>Comente aqui</span>
        <textarea
          className={styles.textarea}
          id="comment"
          name="comment"
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          placeholder="Comente aqui..."
        />
      </label>
      <button className={styles.button}>
        <Send />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
