import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  BackgroundImage,
  SubTitle,
  Title,
  WrapperContent,
  WrapperScore,
  WrapperSingleCard,
} from './MovieDetails.style';

import { options } from '../../serviceApi/themoviedbApi';

const MovieDetailsPage = () => {
  const [dataSingleCard, setDataSingleCard] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => {
        setDataSingleCard(response);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  const getYearFromDate = dateString => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  const {
    poster_path,
    backdrop_path,
    release_date,
    title,
    vote_average,
    overview,
    genres,
  } = dataSingleCard || {};
  return (
    <main>
      <div className="container">
        <Link to={backLinkHref}>Go back</Link>
      </div>

      {dataSingleCard && (
        <BackgroundImage backgroundimage={backdrop_path}>
          <div className="container">
            <WrapperSingleCard>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                width="300"
                height="450"
              />
              <WrapperContent>
                <Title>
                  {title} ({getYearFromDate(release_date)})
                </Title>
                <WrapperScore>
                  <SubTitle>User Score:</SubTitle>
                  <SubTitle className="percentege">
                    {Math.round(vote_average * 10)} %
                  </SubTitle>
                </WrapperScore>
                <SubTitle>Overview:</SubTitle>
                <p>{overview}</p>
                <div>
                  <SubTitle>Genres:</SubTitle>
                  <ul>
                    {genres.map(genre => (
                      <li key={genre.name}>
                        <p>{genre.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <SubTitle>
                        <Link to="cast" state={{ from: backLinkHref }}>
                          Cast
                        </Link>
                      </SubTitle>
                    </li>
                    <li>
                      <SubTitle>
                        <Link to="reviews" state={{ from: backLinkHref }}>
                          Reviews
                        </Link>
                      </SubTitle>
                    </li>
                  </ul>
                </div>
              </WrapperContent>
            </WrapperSingleCard>
          </div>
        </BackgroundImage>
      )}

      <div className="container">
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default MovieDetailsPage;
