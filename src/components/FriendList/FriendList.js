import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendItemStyle } from 'components/FriendListItem/FriendListItem.styled';
import { FriendListStyle } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  // console.log({ friends });
  return (
    <FriendListStyle>
      {friends.map(friend => (
        <FriendItemStyle key={friend.id} >
          <FriendListItem friend={friend} isOnline={friend.isOnline}/>
        </FriendItemStyle>
      ))}
    </FriendListStyle>
  );
};
