import { Profile } from './Profile/Profile';
import user from '../user.json';

import { StatisticsTitle } from './StatisticsTitle/StatisticsTitle';
import { StatisticsStats } from './StatisticsStats/StatisticsStats';
import data from '../data.json';
import { Container } from './StatisticsTitle/StatisticsTitle.styled';

import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';
import { FriendListItem } from './FriendListItem/FriendListItem';



export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Container>
        <StatisticsTitle title="Upload stats" />
        <StatisticsStats stats={data} />
      </Container>

      <FriendList friends={friends}>
        <FriendListItem/>
      </FriendList>
      
    </>
  );
};
