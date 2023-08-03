import { Profile } from './Profile/Profile';
import user from '../user.json';

import { StatisticsTitle } from './StatisticsTitle/StatisticsTitle';
import data from '../data.json';
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
      <StatisticsTitle title="Upload stats" stats={data}/>
    </>
  );
};
