import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import { searchQuery } from '../serviceApi/themoviedbApi';
import { toast } from 'react-toastify';
import { Span, Title } from 'components/SearchForm/SerchForm.style';

const MoviesPage = () => {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [errorActive, setErrorActive] = useState(false);
  const query = searchParams.get('query') ?? '';
  const queryToLowerCase = query.toLowerCase();

  useEffect(() => {
    if (queryToLowerCase === '') {
      return;
    }

    // Запит на бекенд
    const search = async () => {
      try {
        //очищення списку
        setData(null);

        setErrorActive(false);

        const results = await searchQuery(queryToLowerCase);
        if (results.length === 0) {
          setErrorActive(true);
          throw new Error('Not found');
        } else {
          setData(results);
        }
      } catch (error) {
        toast.error(`${error}`);
      }
    };
    search();
  }, [queryToLowerCase]);

  const updateQueryString = inputValue => {
    const nextParams = inputValue !== '' ? { query: inputValue } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <div className="container">
        <SearchForm onSubmit={updateQueryString} />
        {errorActive && (
          <Title>
            Movies not found for your search
            <Span>"{query}"</Span>
          </Title>
        )}
        {data && (
          <>
            <Title>
              List of movies found for your search
              <Span>"{query}"</Span>
            </Title>
            <MovieList dataList={data} />
          </>
        )}
      </div>
    </main>
  );
};

export default MoviesPage;
