import styled from '@emotion/styled'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 50px;
`;

export const Description = styled.div`
padding-top: 12px;
text-align: center;
/* padding: 10px; */
outline: grey 1px solid;
width: 288px;
`;

export const List = styled.ul`
list-style:none;
display: flex;
justify-content: center;
align-items: center;
margin: 0;
padding: 0;

`;

export const ListItem = styled.li`
padding: 8px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
outline: grey 1px solid;
width: 80px;
height: 80px;
background-color: lightgrey;
`;

export const Image = styled.img`

width: 100px;
height: 100px;
`;