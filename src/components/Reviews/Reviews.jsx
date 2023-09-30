import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState(null);

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
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setReviewsList([response.results]);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  console.log('reviewsList', reviewsList);
  return (
    <>
      {reviewsList && reviewsList === 0 ? (
        <ul>
          {reviewsList[0].map(review => (
            <li key={review.id}>
              <hr />
              <h3>Author</h3>
              <p>{review.author}</p>
              <p>{review.content}</p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No Reviews</p>
      )}
    </>
  );
};

export default Reviews;
