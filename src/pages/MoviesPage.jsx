import React, { useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import { options } from '../serviceApi/themoviedbApi';
import { Container } from 'components/App.styled';
import SearchForm from 'components/SearchForm/SearchForm';

const MoviesPage = () => {
  const [searchList, setSearchList] = useState(null);

  const searchQuery = inputValue => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setSearchList(response.results);
      })
      .catch(err => console.error(err));
  };
  console.log('SEARCH', searchList);
  return (
    <main>
      <Container>
        <p>сторінка пошуку кінофільмів за ключовим словом</p>
        <SearchForm onSubmit={searchQuery} />
        {searchList && <MovieList dataList={searchList} />}
      </Container>
    </main>
  );
};

export default MoviesPage;
