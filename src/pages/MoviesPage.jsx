import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MovieList from '../components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import { options } from '../serviceApi/themoviedbApi';
import { Container } from 'components/App.styled';
import { toast } from 'react-toastify';
import { Span, Title } from 'components/SearchForm/SerchForm.style';

const MoviesPage = () => {
  const [searchList, setSearchList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [errorActive, setErrorActive] = useState(false);
  const query = searchParams.get('query') ?? '';
  const queryToLowerCase = query.toLowerCase();

  const location = useLocation();
  console.log('location', location);

  useEffect(() => {
    if (queryToLowerCase === '') {
      return;
    }
    const searchQuery = inputValue => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then(response => {
          setSearchList(null);
          setErrorActive(false);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          return response.json();
        })
        .then(response => {
          if (response.results.length === 0) {
            setErrorActive(true);

            throw new Error('Not found');
          }
          setSearchList(response.results);
        })
        .catch(err => {
          toast.error('An error occurred while fetching data.');
        });
    };
    searchQuery(queryToLowerCase);
  }, [queryToLowerCase]);

  const updateQueryString = inputValue => {
    const nextParams = inputValue !== '' ? { query: inputValue } : {};
    setSearchParams(nextParams);
  };

  console.log('SEARCH', searchList);
  return (
    <main>
      <Container>
        <SearchForm onSubmit={updateQueryString} />
        {errorActive && (
          <Title>
            Movies not found for your search
            <Span>"{query}"</Span>
          </Title>
        )}
        {searchList && (
          <>
            <Title>
              List of movies found for your search
              <Span>"{query}"</Span>
            </Title>

            <MovieList dataList={searchList} />
          </>
        )}
      </Container>
    </main>
  );
};

export default MoviesPage;
