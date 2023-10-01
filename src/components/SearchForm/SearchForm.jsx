import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Input } from './SerchForm.style';

const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handlerFormSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      toast.error('Enter something to search.');
      return;
    }
    onSubmit(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={handlerFormSubmit}>
      <Input
        type="text"
        value={inputValue}
        placeholder="Search for a movie, tv show, person..."
        onChange={e => setInputValue(e.target.value)}
      />
      <button type="submit" aria-label=" Search">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
