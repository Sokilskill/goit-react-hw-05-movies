import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import MovieDetailsPage from './MovieDetails/MovieDetails';
import { Container } from './App.styled';
import HeaderComponent from './Header/Header';

import 'react-toastify/dist/ReactToastify.min.css';

export const App = () => {
  return (
    <>
      <Container>
        <HeaderComponent />
      </Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
