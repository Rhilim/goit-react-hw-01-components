import { Container, List , ListItem} from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats}) => {
  return (
    <Container>
      <div className="description">
        <img
          src={avatar}
          alt={username}
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <List>
        <ListItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </ListItem>
        <ListItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </ListItem>
        <ListItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </ListItem>
      </List>
    </Container>
  );
};
