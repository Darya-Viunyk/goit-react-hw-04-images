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
