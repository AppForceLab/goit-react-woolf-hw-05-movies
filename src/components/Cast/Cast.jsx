import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getMovieCredits } from 'services/moviedb';
import {
  FALLBACK_IMAGE_URL,
  GENERIC_ERROR_MESSAGE,
  IMAGE_BASE_URL,
} from 'constants/constants';

import style from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const handleLoadMovieCast = async movieId => {
      setIsLoading(true);
      try {
        const {
          data: { cast },
        } = await getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        alert(error.message || GENERIC_ERROR_MESSAGE);
      } finally {
        setIsLoading(false);
      }
    };

    handleLoadMovieCast(movieId);
  }, [movieId]);

  return (
    <>
      {!!cast.length && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => {
            const src = profile_path
              ? `${IMAGE_BASE_URL}/w500${profile_path}`
              : FALLBACK_IMAGE_URL;

            return (
              <li key={id} className={style.item}>
                <img src={src} alt="Actress / actor" className={style.image} />
                <p>{name}</p>
                <p>{character}</p>
              </li>
            );
          })}
        </ul>
      )}
      {!isLoading && !cast.length && (
        <div style={{ marginTop: '16px' }}>
          We don't have any cast for this movie.
        </div>
      )}
    </>
  );
};

export default Cast;
