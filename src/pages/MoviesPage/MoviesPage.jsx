import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import {GENERIC_ERROR_MESSAGE} from 'constants/constants';
import { getMoviesByKeyWord } from '../../services/moviedb';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchDone, setIsSearchDone] = useState(false);

  
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const handleSearch = async () => {
      setIsSearchDone(false);
      setIsLoading(true);
      try {
        const {
          data: { results },
        } = await getMoviesByKeyWord(query);
        setSearchResults(results);
      } catch (error) {
        alert(error.message || GENERIC_ERROR_MESSAGE);
      } finally {
        setIsLoading(false);
        setIsSearchDone(true);
      }
    };

    query && handleSearch();
  }, [query]);

  return (
    <div>
      <SearchForm onSubmit={setSearchParams} />
      {isLoading && <div>Loading...</div>}
      {!isLoading && !!searchResults.length && (
        <MoviesList movies={searchResults}/>
      )}
      {isSearchDone && !searchResults.length && 'No movies found.'}
    </div>
  );
};

export default Movies;
