import classes from './ProfileDescription.module.css';

export function ProfileDescription({ username, tag, location, avatar }) {
  return (
    <div className={classes.description}>
      <img src={avatar} alt={username} className={classes.avatar} />
      <p className={classes.name}>{username}</p>
      <p className={classes.tag}>@{tag}</p>
      <p className={classes.location}>{location}</p>
    </div>
  );
}
