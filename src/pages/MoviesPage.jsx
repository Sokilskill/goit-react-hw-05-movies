import React, { useState } from 'react';
import MovieList from '../components/MovieList/MovieList';

const MoviesPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchList, setSearchList] = useState(null);

  const handlerButtonSearch = e => {
    e.preventDefault();
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmQ3NmRmZDdiNmU5NzhhMTM5ZTViOGFkYzlhOGVlNiIsInN1YiI6IjY1MTNlMjI4NzlhMWMzMDEzYWE2ZGY0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLljB3dWM0vxoQXzuHqabIWo1lgTHgs-WsVPw4nkuQw',
      },
    };

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
  return (
    <>
      <div>MoviesPage</div>
      <p>сторінка пошуку кінофільмів за ключовим словом</p>
      <form action="" onSubmit={handlerButtonSearch}>
        <input
          type="text"
          onChange={e => setInputValue(e.currentTarget.value)}
        />
        <button>Search</button>
      </form>
      {searchList && <MovieList dataList={searchList} />}
    </>
  );
};

export default MoviesPage;
