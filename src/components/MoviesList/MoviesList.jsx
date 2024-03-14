import React from 'react';

import { MovieLink } from 'components/MovieLink/MovieLink';

export const MoviesList = ({ movies, state = null }) => {
  return (
    <ul>
      {movies.map(({ id, title, name, original_name }) => (
        <MovieLink
          key={id}
          to={`/movies/${id}`}
          text={title || name || original_name}
          state={state}
        />
      ))}
    </ul>
  );
};
