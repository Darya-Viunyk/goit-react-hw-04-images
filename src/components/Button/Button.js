import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export function Button({ onButtonClick }) {
  return (
    <button
      type="button"
      onClick={() => onButtonClick()}
      className={styles.button}
    >
      Load more
    </button>
  );
}
Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
