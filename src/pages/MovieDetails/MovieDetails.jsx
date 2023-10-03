import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchApi } from '../../serviceApi/themoviedbApi';
import {
  BackToList,
  BackgroundImage,
  SubTitle,
  Title,
  WrapperContent,
  WrapperScore,
  WrapperSingleCard,
} from './MovieDetails.style';

const MovieDetailsPage = () => {
  const [dataSingleCard, setDataSingleCard] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const url = `/3/movie/${movieId}?language=en-US`;

  useEffect(() => {
    try {
      const searchSingleCard = async () => {
        const data = await fetchApi(url);
        setDataSingleCard(data);
      };
      searchSingleCard();
    } catch (error) {
      console.log('error', error);
    }
  }, [movieId, url]);

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
      <BackToList className="container">
        <Link to={backLinkHref}>Back to the list of movies</Link>
      </BackToList>

      <section>
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
      </section>

      <section>
        <div className="container">
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default MovieDetailsPage;
