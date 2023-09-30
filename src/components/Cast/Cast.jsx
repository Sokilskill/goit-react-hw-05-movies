import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [castList, setCastList] = useState(null);
  const { movieId } = useParams();

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
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => {
        // console.log('RESP', response.cast);
        setCastList([response.cast]);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <>
      <div>CastPage</div>
      <p>інформація про акторський склад </p>
      <ul>
        {castList &&
          castList[0].map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w138_and_h175_face${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
