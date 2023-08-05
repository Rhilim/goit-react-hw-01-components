import { BsCircleFill } from 'react-icons/bs';
import { StatusCircle } from './FriendListItem.styled';

export const FriendListItem = ({friend, isOnline}) => {
    // console.log(isOnline);
   ;
  return (
    <>
      <StatusCircle isOnline={friend.isOnline}><BsCircleFill /></StatusCircle>
      <img className="avatar" src={friend.avatar} alt={friend.name} width="48" height ="48" />
      <p className="name">{friend.name}</p>
    </>
  );
};

