import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { options } from '../serviceApi/themoviedbApi';
import { toast } from 'react-toastify';

const HomePage = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    if (list) {
      return;
    }

    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => {
        // console.log('list', response);

        setList(response.results);
      })
      .catch(err => toast.error(err));
  }, [list]);

  return (
    <main>
      <section>
        <div className="container">
          <h1
            style={{ textAlign: 'center', fontSize: '32px', fontWeight: 700 }}
          >
            Trending Movies
          </h1>
          <hr />
          {list && <MovieList dataList={list} />}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
