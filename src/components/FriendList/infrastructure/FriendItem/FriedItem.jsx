import clsx from 'clsx';
import classes from './FriendItem.module.css';

export const FriendItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <li className={classes.item}>
      <span
        className={clsx(classes.bullet, { [classes.bulletOffline]: isOnline })}
      />
      <img className={classes.avatar} src={avatar} alt={name} width="48" />
      <p className={classes.name}>{name}</p>
    </li>
  );
};
