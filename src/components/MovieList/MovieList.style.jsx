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
  max-width: 22%;
  border: 1px solid #e3e3e3;
  border-radius: var(--imageBorderRadius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    max-width: 44%;
  }

  @media (max-width: 480px) {
    max-width: 40%;
  }
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 8px 8px 0 0;
  > img{
    display: block;
    width: 100%;
    height: 100%;
}
  }
`;

export const Content = styled.div`
  padding: 20px 10px;
  min-height: 45px;
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
