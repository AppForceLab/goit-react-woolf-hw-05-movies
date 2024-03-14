import React, { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'services/moviedb';
import { GENERIC_ERROR_MESSAGE } from 'constants/constants';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const { data: { results } } = await getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        console.error(error.message || GENERIC_ERROR_MESSAGE);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Trending Today</h1>
      {isLoading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <MoviesList movies={trendingMovies} />
      )}
    </main>
  );
};

export default HomePage;
