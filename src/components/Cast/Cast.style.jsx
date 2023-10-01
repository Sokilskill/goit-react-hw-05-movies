import styled from 'styled-components';

export const List = styled.ul`
  padding: 30px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Li = styled.li`
  margin: 10px 4px 10px 10px;
  border: 1px solid rgba(var(--lightGrey), 1);
  padding-bottom: 10px;
  border-radius: var(--imageBorderRadius);
  overflow: hidden;
  min-width: 140px;
  width: 140px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
export const Name = styled.p`
  font-weight: 700;
  padding: 10px;
`;

export const Character = styled.p`
  font-size: 14px;
  padding: 0 10px;
`;
