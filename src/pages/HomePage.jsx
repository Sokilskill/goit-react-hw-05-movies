// import MovieList from 'components/MovieList/MovieList';
import React, { Suspense, useEffect, useState } from 'react';
import { fetchApi } from '../serviceApi/themoviedbApi';
import { toast } from 'react-toastify';

const MovieList = React.lazy(() => import('../components/MovieList/MovieList'));

const HomePage = () => {
  const [dataList, setDataList] = useState(null);

  const url = '/3/trending/movie/day?language=en-US';

  useEffect(() => {
    if (dataList) {
      return;
    }

    const searchPopularMovie = async () => {
      try {
        const { results } = await fetchApi(url);
        setDataList(results);
      } catch (error) {
        toast.error(`${error}`);
      }
    };
    searchPopularMovie();
  }, [dataList]);

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
          <Suspense fallback={<p>STAY HERE!</p>}>
            {dataList && <MovieList dataList={dataList} />}
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
