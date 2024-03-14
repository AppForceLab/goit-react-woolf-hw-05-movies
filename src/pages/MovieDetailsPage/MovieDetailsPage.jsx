import React, { useEffect, useState, Suspense } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

import { getMovie } from '../../services/moviedb';
import {
  FALLBACK_IMAGE_URL, GENERIC_ERROR_MESSAGE, IMAGE_BASE_URL,
} from 'constants/constants';

import style from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLoadMovieDetails = async movieId => {
      setIsLoading(true);
      try {
        const {
          data: {
            original_title,
            title,
            name,
            vote_average,
            overview,
            genres,
            poster_path,
            release_date,
          },
        } = await getMovie(movieId);

        setMovieDetails({
          title: title || name || original_title,
          score: vote_average,
          overview,
          genres,
          posterSrc: poster_path
            ? `${IMAGE_BASE_URL}/w500${poster_path}`
            : FALLBACK_IMAGE_URL,
          releasYear: release_date.substring(0, 4),
        });
      } catch (error) {
        alert(error.message || GENERIC_ERROR_MESSAGE);
      } finally {
        setIsLoading(false);
      }
    };

    handleLoadMovieDetails(movieId);
  }, [movieId]);

  const handleBackButtonClick = () => {
    navigate(location.state ?? '/');
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && movieDetails && (
        <div>
          <button onClick={handleBackButtonClick}>&larr; Go back</button>
          <div className={style.detailsContainer}>
            <div className={style.imageContainer}>
              <img
                src={movieDetails.posterSrc}
                alt={`${movieDetails.title} poster`}
                className={style.image}
              />
            </div>
            <div>
              <h1>{`${movieDetails.title} (${movieDetails.releasYear})`}</h1>
              <p>User score: {movieDetails.score}</p>
              <div>
                <h2>Overview</h2>
                <p>{movieDetails.overview}</p>
              </div>
              <div>
                <h3>Genres</h3>
                <ul className={style.genresList}>
                  {movieDetails.genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={style.additionalLinksWrapper}>
        <p>Additional information</p>
        <ul className={'navList'}>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
