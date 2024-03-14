import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getMovieReviews } from 'services/moviedb';
import {GENERIC_ERROR_MESSAGE} from 'constants/constants';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const handleLoadMovieReviews = async movieId => {
      setIsLoading(true);
      try {
        const {
          data: { results },
        } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        alert(error.message || GENERIC_ERROR_MESSAGE);
      } finally {
        setIsLoading(false);
      }
    };

    handleLoadMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {!!reviews.length && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <b>Author: {author}</b>
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && !reviews.length && (
        <div style={{ marginTop: '16px' }}>
          We don't have any reviews for this movie.
        </div>
      )}
    </>
  );
};

export default Reviews;
