import { Route, Routes } from 'react-router-dom';
import { Header, Link, Container } from './App.styled';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import MovieDetailsPage from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="movies">Movies</Link>
            <Link to="movies/:movieId"></Link>
          </nav>
        </Header>
      </Container>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
