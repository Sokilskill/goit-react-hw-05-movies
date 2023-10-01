import styled from 'styled-components';

export const BackgroundImage = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to right,
      rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px),
      rgba(31.5, 31.5, 31.5, 0.84) 50%,
      rgba(31.5, 31.5, 31.5, 0.84) 100%
    ),
    ${props =>
      props.backgroundimage
        ? `url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${props.backgroundimage}')`
        : 'none'};
`;

export const WrapperSingleCard = styled.div`
  display: flex;
  gap: 40px;
  max-width: var(--maxPrimaryPageWidth);
  width: 100%;
  padding: 30px 0;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px 0;
  color: var(--textColor);
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;

export const Overview = styled.p`
  font-weight: 500;
`;
