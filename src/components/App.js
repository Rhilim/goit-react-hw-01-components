import { Profile } from './Profile/Profile';
import user from '../user.json';

import { StatisticsTitle } from './StatisticsTitle/StatisticsTitle';
import { StatisticsStats } from './StatisticsStats/StatisticsStats';
import data from '../data.json';
import { Container } from './StatisticsTitle/StatisticsTitle.styled';

// import { Container } from './Profile/Profile.styled';

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
    </>
  );
};
