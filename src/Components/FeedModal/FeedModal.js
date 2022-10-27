import React from "react";
import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading";
import { usePhotoQuery } from "../../Queries/usePhotoQuery";
import PhotoContent from "../PhotoContent";
import styles from "./FeedModal.module.css";

const FeedModal = ({ photo, onClose }) => {
  const photoModal = usePhotoQuery(photo);
  const { data, loading, error } = photoModal;

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) onClose();
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && !data && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
