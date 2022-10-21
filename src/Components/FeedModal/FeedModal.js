import React from "react";
import Error from "../../Helper/Error/index";
import Loading from "../../Helper/Loading/index";
import { usePhotoModal } from "../../Queries/usePhotoModal";
import Button from "../Form/Button/index";
import PhotoContent from "../PhotoContent/index";
import styles from "./FeedModal.module.css";

const FeedModal = ({ photo, onClose }) => {
  const photoModal = usePhotoModal(photo);
  console.log(photoModal);
  const { data, loading, error } = photoModal;
  console.log(data);

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
