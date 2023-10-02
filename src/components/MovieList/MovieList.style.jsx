import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 30px 0;
`;
export const Li = styled.li`
  max-width: 20%;
  margin: 8px;
  border: 1px solid #e3e3e3;
  border-radius: var(--imageBorderRadius);

  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    max-width: 44%;
  }

  @media (max-width: 480px) {
    max-width: 40%;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
`;

export const Content = styled.div`
  padding: 20px 10px 20px;

  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  font-weight: 700;
  color: #000;
  transition: color 300ms linear;

  &:hover {
    color: var(--tmdbLightBlue);
  }
`;
