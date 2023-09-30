import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';

// const KEY_API = '76d76dfd7b6e978a139e5b8adc9a8ee6';

const HomePage = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    if (list) {
      return;
    }
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmQ3NmRmZDdiNmU5NzhhMTM5ZTViOGFkYzlhOGVlNiIsInN1YiI6IjY1MTNlMjI4NzlhMWMzMDEzYWE2ZGY0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLljB3dWM0vxoQXzuHqabIWo1lgTHgs-WsVPw4nkuQw',
      },
    };
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => {
        console.log('list', response);

        setList(response.results);
      })
      .catch(err => console.error(err));
  }, [list]);

  return (
    <main>
      <h1 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 700 }}>
        Список популярних фільмів
      </h1>
      <hr />

      {list && <MovieList dataList={list} />}
    </main>
  );
};

export default HomePage;
