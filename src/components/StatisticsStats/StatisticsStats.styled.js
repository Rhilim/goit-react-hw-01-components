import styled from '@emotion/styled'

function getRandomHexColor() {
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
width: 50px;
height: 50px;
gap: 10px;
/* outline: black 1px solid; */
padding: 10px;
background-color: ${getRandomHexColor};
`;

