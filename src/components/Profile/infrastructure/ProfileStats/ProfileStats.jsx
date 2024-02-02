import classes from './ProfileStats.module.css';
import { ProfileStatsItem } from '../ProfileStatsItem';

export const ProfileStats = ({ stats }) => {
  const itemArr = Object.entries(stats);
  return (
    <ul className={classes.stats}>
      {itemArr.map(([name, value]) => (
        <ProfileStatsItem value={value} key={name} name={name} />
      ))}
    </ul>
  );
};
