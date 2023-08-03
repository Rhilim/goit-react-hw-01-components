export const FriendList = ({ friends }) => {
  console.log({friends})
  return (
    <ul>
      {friends.map(friend => (
        <li>{friend.name}</li>
      ))}
    </ul>
  );
};
