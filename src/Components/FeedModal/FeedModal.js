import React from "react";
import { GET_PHOTO_MODAL } from "../../api";
import Error from "../../Helper/Error/Error";
import Loading from "../../Helper/Loading/Loading";
import useFetch from "../../Hooks/useFetch";
import Button from "../Form/Button";
import PhotoContent from "../PhotoContent/index";
import styles from "./FeedModal.module.css";

const FeedModal = ({ photo, onClose }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_PHOTO_MODAL(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) onClose();
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <Button style={{ position: "absolute" }} onClick={onClose}>
        Fechar
      </Button>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
