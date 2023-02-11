import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ imeges }) => {
  return (
    <ul className={styles.imageGallery}>
      {imeges.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
};
ImageGallery.propTypes = {
  imeges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
