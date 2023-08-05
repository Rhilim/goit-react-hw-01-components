import styled from '@emotion/styled';

export const FriendItemStyle = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
  gap: 20px;
  font-size: 1.5em;
  font-weight: bold;
  outline: 1px solid grey;
  margin: 5px;
  padding: 5px;
  background-color: #B0C4DE;
`;

export const StatusCircle = styled.span`
  margin-left: 15px;
  color: ${props => (props.isOnline === true ? 'green' : 'red')};
`;
