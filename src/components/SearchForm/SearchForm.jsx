import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handlerFormSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      toast.error('Enter something to search.');
      return;
    }
    onSubmit(inputValue.toLowerCase());
    setInputValue('');
  };
  return (
    <form onSubmit={handlerFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.currentTarget.value)}
      />
      <button type="submit" aria-label=" Search">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
