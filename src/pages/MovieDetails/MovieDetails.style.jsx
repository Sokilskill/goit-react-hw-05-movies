import styled from 'styled-components';

export const Section = styled.section`
  padding: git 30px 0;
`;

export const BackToList = styled.div`
  padding: 20px;
  > a {
    display: inline-block;
    padding: 10px;
    border-radius: var(--imageBorderRadius);
    background-color: var(--tmdbDarkBlue);
    color: var(--textColor);
    transition: all 200ms linear;

    &:hover {
      background-color: var(--tmdbLightBlue);
      color: var(--tmdbDarkBlue);
    }
  }
`;

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

export const WrapperScore = styled.div`
  display: flex;
  gap: 6px;
`;
export const Overview = styled.p`
  font-weight: 600;
`;

export const SubTitle = styled.h3`
  color: var(--accountRed);
  &.percentege {
    color: var(--textColor);
  }
`;

export const Genres = styled.ul`
margin-buttom`;
