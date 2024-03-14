import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/Movies" element={<MoviesPage />} />
      <Route path="/Movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Route>
  </Routes>
);

export default App;