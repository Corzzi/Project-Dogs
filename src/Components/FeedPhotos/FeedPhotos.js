import React from "react";
import Error from "../../Helper/Error/index";
import Loading from "../../Helper/Loading/index";
import { usePhotosQuery } from "../../Queries/usePhotosQuery";
import { PAGE_SIZE } from "../../Utils/constants";
import FeedPhotosItem from "../FeedPhotosItem/index";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ page, user, onClickPhoto, onHasMore }) => {
  const a = usePhotosQuery({ page, user });
  const { data, error } = a;
  console.log(a); // Vem da própria api?

  React.useEffect(() => {
    if (data && data.length < PAGE_SIZE) {
      onHasMore(false);
    }
  }, [data, onHasMore]);

  if (error) return <Error error={error} />;
  if (!data) return <Loading />;

  return (
    <ul className={`animeLeft ${styles.feed}`}>
      {data.map((photo) => (
        <FeedPhotosItem
          onClick={() => onClickPhoto(photo, photo.id)}
          key={photo.id}
          photo={photo}
        />
      ))}
    </ul>
  );
};

export default FeedPhotos;
