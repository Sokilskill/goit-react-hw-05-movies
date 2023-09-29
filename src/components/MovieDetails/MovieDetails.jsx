import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const [detailsMovie, setDetailsMovie] = useState(null);
  const { movieId } = useParams();

  console.log('movieId ===', movieId);
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
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setDetailsMovie([response]);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  console.log('detailsMovie ===', detailsMovie);
  return (
    <>
      <Link to="movies">Go back</Link>
      <div>MovieDetailsPage</div>

      <p>Сторінка детальної інформації про фільм </p>
      <ul>
        {detailsMovie &&
          detailsMovie.map(item => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              />
              <p>User Score: %</p>
              <h3>Overview</h3>
              <p>{item.overview}</p>
              <h3>Genres</h3>
              <p>{item.genres.map(genre => genre.name)}</p>
            </li>
          ))}
      </ul>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
