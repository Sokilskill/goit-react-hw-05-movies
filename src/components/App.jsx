import { Route, Routes } from 'react-router-dom';
import { Header, Link, Container } from './App.styled';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import MovieDetailsPage from './MovieDetails/MovieDetails';

const KEY_API = '76d76dfd7b6e978a139e5b8adc9a8ee6';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
          <Link to="movies/:movieId"></Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Container>
  );
};
