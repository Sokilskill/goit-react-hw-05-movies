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
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 16px * 4) / 5);
  border: 1px solid #e3e3e3;
  border-radius: var(--imageBorderRadius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  transition: transform 0.3s ease-in-out;
  background-color: var(--lightGrey);
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    flex-basis: calc((100% - 16px * 2) / 3);
  }

  @media (max-width: 480px) {
    flex-basis: calc((100% - 16px) / 2);
  }
`;

export const WrapperImage = styled.div`
  width: 100%;
  // min-height: 70%;
  border-radius: 8px 8px 0 0;

   img{
    display: block;
    width: 100%;
    height: 100%;
}
  }
`;

export const Content = styled.div`
  padding: 20px 10px;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  color: rgb(0, 0, 0);
  transition: color 300ms linear;

  &:hover {
    color: var(--tmdbLightBlue);
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
