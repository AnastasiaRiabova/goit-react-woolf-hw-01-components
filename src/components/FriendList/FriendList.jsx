import classes from './FriendList.module.css';
import { FriendItem } from './infrastructure';

export const FriendList = ({ friends }) => {
  return (
    <ul className={classes.friendList}>
      {friends.map(friend => (
        <FriendItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};
