import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import { Header, Link, Container } from './App.styled';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import ReviewsPage from 'pages/ReviewsPage';
import CastPage from 'pages/CastPage';

const KEY_API = '76d76dfd7b6e978a139e5b8adc9a8ee6';

export const App = () => {
  fetch('themoviedb.org');
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
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Routes>
    </Container>
  );
};
