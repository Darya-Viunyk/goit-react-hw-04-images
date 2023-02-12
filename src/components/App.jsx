import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import * as ItemApi from './ItemApi';
import './styles.css';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [imeges, setImeges] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!query) return;
    const getFotos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const imeges = await ItemApi.getImages(query, page);
        setImeges(prevImeges => [...prevImeges, ...imeges.hits]);
      } catch (error) {
        setError('Oшибка, попробуйте еще раз!!');
      } finally {
        setIsLoading(false);
      }
    };
    getFotos();
  }, [query, page]);

  const onHandleSubmit = value => {
    setQuery(value);
    setPage(1);
    setImeges([]);
  };
  const onButtonClick = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar onSubmit={onHandleSubmit} />
      {imeges.length > 0 && <ImageGallery imeges={imeges} />}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {imeges.length > 0 && <Button onButtonClick={onButtonClick} />}
      {isLoading && <ClipLoader />}
    </>
  );
}
// export class App extends Component {
//   state = {
//     query: '',
//     page: 1,
//     imeges: [],
//     isVisBle: false,
//     isEmpty: false,
//     isLoading: false,
//     error: null,
//   };

//   onHandleSubmit = value => {
//     this.setState({ query: value, page: 1, imeges: [], isEmpty: false });
//   };

//   componentDidUpdate(_, prevState) {
//     const { query, page } = this.state;
//     if (prevState.query !== query || prevState.page !== page) {
//       this.getFotos(query, page);
//     }
//   }
//   onButtonClick = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };
//   getFotos = async (query, page) => {
//     try {
//       this.setState({ isLoading: true, error: null });
//       const imeges = await ItemApi.getImages(query, page);
//       this.setState(prevState => {
//         return {
//           imeges: [...prevState.imeges, ...imeges.hits],
//         };
//       });
//     } catch (error) {
//       this.setState({
//         error: 'Oшибка, попробуйте еще раз!!',
//       });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   render() {
//     const { imeges, error, isLoading } = this.state;

//     return (
//       <>
//         <Searchbar onSubmit={this.onHandleSubmit} />
//         {imeges.length > 0 && <ImageGallery imeges={imeges} />}
//         {error && <p style={{ color: 'red' }}>{error}</p>}

//         {imeges.length > 0 && <Button onButtonClick={this.onButtonClick} />}
//         {isLoading && <ClipLoader />}
//       </>
//     );
//   }
// }
