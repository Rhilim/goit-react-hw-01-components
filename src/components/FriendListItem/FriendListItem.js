
export const FriendListItem = ({friend}) => {
    
  return (
    <>
      <span className="status">{friend.isOnline}</span>
      <img className="avatar" src={friend.avatar} alt={friend.name} width="48" height ="48" />
      <p className="name">{friend.name}</p>
    </>
  );
};
