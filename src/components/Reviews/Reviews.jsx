import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'serviceApi/themoviedbApi';
import { Author, Content } from './Reviews.styled';
const Reviews = () => {
  const [reviewsList, setReviewsList] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const searchReview = async () => {
      try {
        const { results } = await fetchReviews(movieId);
        setReviewsList(results);
      } catch (error) {
        console.log('error', error);
      }
    };
    searchReview();
  }, [movieId]);

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
