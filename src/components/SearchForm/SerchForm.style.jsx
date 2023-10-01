import styled from 'styled-components';

export const Form = styled.form`
  padding: 30px;
`;
export const Input = styled.input`
  width: 100%;
  height: 44px;
  font-family: Arial, sans-serif;
  font-style: italic;
  font-size: 100%;
  color: #acacac;
  padding: 10px 30px;
  border-radius: 8px;
  margin-bottom: 30px;
`;

export const Title = styled.h3`
  padding-left: 30px;
  margin-right: 4px;
`;
export const Span = styled.span`
  font-weight: 700;
  font-style: italic;
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  margin: 0 auto;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 150px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #303f9f;
  }
  &:focus {
    background-color: #303f9f;
  }
`;
