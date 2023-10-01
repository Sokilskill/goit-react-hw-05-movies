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
import { Container } from 'components/App.styled';
import { options } from '../../serviceApi/themoviedbApi';

const MovieDetailsPage = () => {
  const [singleCard, setSingleCard] = useState(null);
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
        setSingleCard(response);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  const { poster_path, backdrop_path, title, vote_average, overview, genres } =
    singleCard || {};
  return (
    <main>
      <Container>
        <Link to={backLinkHref}>Go back</Link>
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
