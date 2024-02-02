import classes from './Profile.module.css';
import { ProfileDescription, ProfileStats } from './infrastructure';
export const Profile = ({ username, tag, stats, avatar, location }) => (
  <div className={classes.profile}>
    <ProfileDescription
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
    />
    <ProfileStats stats={stats} />
  </div>
);
