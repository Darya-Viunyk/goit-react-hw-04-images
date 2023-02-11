import { useState } from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [query, setquery] = useState('');
  const handleInput = event => {
    setquery({ query: event.currentTarget.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log([query]);
    // if (query.trim() === '') {
    //   alert('This field cannot be empty, please enter a valid name');
    //   return;
    // }
    onSubmit(query);
    setquery({ query: '' });
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

// export class Searchbar extends Component {
//   state = { query: '' };
//   handleInput = event => {
//     this.setState({ query: event.currentTarget.value });
//   };
//   handleSubmit = event => {
//     const { query } = this.state;
//     event.preventDefault();
//     if (this.state.query.trim() === '') {
//       alert('This field cannot be empty, please enter a valid name');
//       return;
//     }
//     this.props.onSubmit(query);
//     this.setState({ query: '' });
//   };

//   render() {
//     return (
//       <header className={styles.searchBar}>
//         <form onSubmit={this.handleSubmit} className={styles.searchForm}>
//           <button type="submit" className={styles.searchFormButton}>
//             <span className={styles.searchFormButtonLabel}>Search</span>
//           </button>

//           <input
//             onChange={this.handleInput}
//             value={this.state.query}
//             type="text"
//             className={styles.searchFormInput}
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }
