import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import {
  BackgroundImage,
  Overview,
  Title,
  WrapperContent,
  WrapperSingleCard,
} from './MovieDetails.style';
import { Container } from 'components/App.styled';
import { options } from '../../serviceApi/themoviedbApi';

const MovieDetailsPage = () => {
  const [singleCard, setSingleCard] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        setSingleCard(response);
      })
      .catch(err => console.error(err));
  }, [movieId]);
  // console.log('singleCard', singleCard);

  const { poster_path, backdrop_path, title, vote_average, overview, genres } =
    singleCard || {};
  return (
    <main>
      <Container>
        <Link to="movies">Go back</Link>
      </Container>

      {singleCard && (
        <BackgroundImage backgroundimage={backdrop_path}>
          <Container>
            <WrapperSingleCard>
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title}
                width="300"
                height="450"
              />
              <WrapperContent>
                <Title>{title}</Title>
                <p>User Score: {Math.round(vote_average * 10)} %</p>
                <Overview>Overview</Overview>
                <p>{overview}</p>
                <div>
                  <h3>Genres</h3>
                  <ul>
                    {genres.map(genre => (
                      <li key={genre.name}>
                        <p>{genre.name}</p>
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
                </div>
              </WrapperContent>
            </WrapperSingleCard>
          </Container>
        </BackgroundImage>
      )}
      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDetailsPage;
