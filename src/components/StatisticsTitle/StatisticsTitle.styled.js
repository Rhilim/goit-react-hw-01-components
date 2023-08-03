import styled from '@emotion/styled'
import { getRandomHexColor } from 'components/StatisticsStats/StatisticsStats.styled';


export const Container = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 50px;

`;

export const StatTitle = styled.h2`
color: ${getRandomHexColor};
text-transform: uppercase;
margin-right: auto; 
`;