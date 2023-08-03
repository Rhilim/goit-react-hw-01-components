import styled from '@emotion/styled';

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatList = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  padding-left: 0;
`;

export const StatListEl = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  gap: 10px;
  color: #fff;
  font-size: 1em;
  padding: 10px;
  background-color: ${getRandomHexColor};
`;

export const PercentSpan = styled.span`
  font-size: 2em;
  font-weight: bold;
`;
