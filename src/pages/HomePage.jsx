import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmQ3NmRmZDdiNmU5NzhhMTM5ZTViOGFkYzlhOGVlNiIsInN1YiI6IjY1MTNlMjI4NzlhMWMzMDEzYWE2ZGY0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLljB3dWM0vxoQXzuHqabIWo1lgTHgs-WsVPw4nkuQw',
      },
    };
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => {
        setList(response.results);
      })
      .catch(err => console.error(err));
  }, []);

  // console.log(
  //   'map',
  //   list.map(movie => movie.id)
  // );

  return (
    <main>
      <div>Популярні фільми</div>
      <hr />
      <MovieList dataList={list} />
      <p>Список популярних фільмів</p>
    </main>
  );
};

export default HomePage;
