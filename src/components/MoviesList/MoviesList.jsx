import React from 'react';
import { useLocation } from 'react-router-dom';
import { MovieLink } from 'components/MovieLink/MovieLink';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, name, original_name }) => (
        <MovieLink
          key={id}
          to={`/movies/${id}`}
          text={title || name || original_name}
          state={location}
        />
      ))}
    </ul>
  );
};
