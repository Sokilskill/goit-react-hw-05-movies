import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
`;
export const Li = styled.li`
  width: calc(20% - 20px);
  margin: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
`;

export const WrapperImage = styled.div`
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 26px 10px 12px;

  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  font-weight: 500;
  color: #000;
  transition: color 300ms linear;

  &:hover {
    color: var(--tmdbLightBlue);
  }
`;
