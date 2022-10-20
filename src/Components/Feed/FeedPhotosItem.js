import React from "react";
import Image from "../../Helper/Image";
import styles from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo, onClick }) => {
  return (
    <li className={styles.photo} onClick={onClick}>
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
