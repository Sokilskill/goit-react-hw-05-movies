import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import { options } from '../serviceApi/themoviedbApi';
import { Container } from 'components/App.styled';
import { toast } from 'react-toastify';

const MoviesPage = () => {
  const [searchList, setSearchList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const queryToLowerCase = query.toLowerCase();

  console.log('query', `"${query}"`);
  const updateQueryString = inputValue => {
    const nextParams = inputValue !== '' ? { query: inputValue } : {};
    setSearchParams(nextParams);
  };
  useEffect(() => {
    const searchQuery = inputValue => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(response => {
          console.log('response.results', response.results);
          setSearchList(response.results);
        })
        .catch(err => {
          console.error(err);
          toast.error('An error occurred while fetching data.');
        });
    };
    searchQuery(queryToLowerCase);
  }, [queryToLowerCase]);

  console.log('SEARCH', searchList);
  return (
    <main>
      <Container>
        <SearchForm onSubmit={updateQueryString} />
        {searchList && (
          <>
            <h3>
              <span>{query}</span>
            </h3>
            <MovieList dataList={searchList} />
          </>
        )}
      </Container>
    </main>
  );
};

export default MoviesPage;
