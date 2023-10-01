import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { options } from 'serviceApi/themoviedbApi';
import { Author, Content } from './Reviews.styled';
const Reviews = () => {
  const [reviewsList, setReviewsList] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setReviewsList(response.results);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  console.log('reviewsList', reviewsList);
  return (
    <>
      {reviewsList ? (
        <ul>
          {reviewsList.map(({ id, author, content }) => (
            <li key={id}>
              <Author>Author: {author}</Author>

              <Content>{content}</Content>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <Content>No Reviews</Content>
      )}
    </>
  );
};

export default Reviews;
