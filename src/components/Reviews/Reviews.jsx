import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi } from 'serviceApi/themoviedbApi';
import { Author, Content } from './Reviews.styled';
const Reviews = () => {
  const [reviewsList, setReviewsList] = useState(null);
  const { movieId } = useParams();
  const url = `/3/movie/${movieId}/reviews?language=en-US&page=1`;
  useEffect(() => {
    const searchReview = async () => {
      try {
        const { results } = await fetchApi(url);
        setReviewsList(results);
      } catch (error) {
        console.log('error', error);
      }
    };
    searchReview();
  }, [movieId, url]);

  return (
    <section>
      {reviewsList && reviewsList.length !== 0 ? (
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
    </section>
  );
};

export default Reviews;
