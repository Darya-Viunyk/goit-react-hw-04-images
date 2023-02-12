import { useState } from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [query, setquery] = useState('');
  const handleInput = event => setquery(event.currentTarget.value);

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);
    setquery('');
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <button type="submit" className={styles.searchFormButton}>
          <span className={styles.searchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={handleInput}
          value={query}
          type="text"
          className={styles.searchFormInput}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
