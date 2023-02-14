import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ webformatURL, largeImageURL }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen({ isModalOpen: true });
  };
  const closeModal = () => {
    setIsModalOpen({ isModalOpen: false });
  };
  return (
    <>
      <li className={styles.imageGalleryItem}>
        <img
          src={webformatURL}
          alt="img"
          onClick={openModal}
          className={styles.imageGalleryItemImage}
        />
        {isModalOpen && (
          <Modal onClose={closeModal} largeImageURL={largeImageURL}></Modal>
        )}
      </li>
    </>
  );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
