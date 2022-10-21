import React from "react";
import Error from "../../Helper/Error/index";
import Loading from "../../Helper/Loading/index";
import { usePhotoModalQuery } from "../../Queries/usePhotoModalQuery";
import PhotoContent from "../PhotoContent/index";
import styles from "./FeedModal.module.css";

const FeedModal = ({ photo, onClose }) => {
  const photoModal = usePhotoModalQuery(photo);
  const { data, loading, error } = photoModal;

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) onClose();
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
