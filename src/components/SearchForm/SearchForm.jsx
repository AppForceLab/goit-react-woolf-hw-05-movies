import React from 'react';

import style from './SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
  const handleSearch = event => {
    event.preventDefault();
    const query = event.target.elements[0].value.trim().toLowerCase();
    if (query) {
      onSubmit({ query });
      event.target.elements[0].value = '';
    } else {
      alert('Please, enter valid query');
    }
  };

  return (
    <form onSubmit={handleSearch} className={style.form}>
      <input type="text" name="query" required />
      <button type="submit">Search</button>
    </form>
  );
};
