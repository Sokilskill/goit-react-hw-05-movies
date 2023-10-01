import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import MovieDetailsPage from '../pages/MovieDetails/MovieDetails';

import 'react-toastify/dist/ReactToastify.min.css';
import SharedLayout from './Sha/SharedLayout ';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
