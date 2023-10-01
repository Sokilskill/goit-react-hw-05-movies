import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Input, SearchButton, Form } from './SerchForm.style';

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
    <Form onSubmit={handlerFormSubmit}>
      <Input
        type="text"
        value={inputValue}
        placeholder="Search for a movie, tv show, person..."
        onChange={e => setInputValue(e.target.value)}
      />
      <SearchButton type="submit" aria-label=" Search">
        Search
      </SearchButton>
    </Form>
  );
};

export default SearchForm;
