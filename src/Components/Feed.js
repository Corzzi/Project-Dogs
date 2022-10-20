import PropTypes from "prop-types";
import React from "react";
import useInfiniteScroll from "../Hooks/useInfiniteScroll";
import FeedModal from "./FeedModal/index";
import FeedPhotos from "./FeedPhotos/index";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const { pages, setInfinite } = useInfiniteScroll();

  const handleClickPhoto = (photo) => {
    setModalPhoto(photo);
  };

  const handleModalClose = () => {
    setModalPhoto(null);
  };

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} onClose={handleModalClose} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          page={page}
          user={user}
          onClickPhoto={handleClickPhoto}
          onHasMore={(hasMore) => setInfinite(hasMore)}
        />
      ))}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;
