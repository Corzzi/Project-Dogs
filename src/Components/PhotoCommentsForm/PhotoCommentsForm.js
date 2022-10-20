import React from "react";
import { POST_COMMENT } from "../../api";
import { ReactComponent as Send } from "../../Assets/enviar.svg";
import Error from "../../Helper/Error";
import useFetch from "../../Hooks/useFetch";
import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, onSendComment, single }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem("token");
    const { url, options } = POST_COMMENT(id, token, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      onSendComment(json);
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
