import { Container, List , ListItem, Image} from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats}) => {
  return (
    <Container>
      <div className="description">
        <Image
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
          <span className="quantity"><b>{stats.followers}</b></span>
        </ListItem>
        <ListItem>
          <span className="label">Views</span>
          <span className="quantity"><b>{stats.views}</b></span>
        </ListItem>
        <ListItem>
          <span className="label">Likes</span>
          <span className="quantity"><b>{stats.likes}</b></span>
        </ListItem>
      </List>
    </Container>
  );
};
