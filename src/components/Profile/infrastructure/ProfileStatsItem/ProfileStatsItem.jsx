import classes from './ProfileStatsItem.module.css';

export const ProfileStatsItem = ({ name, value }) => (
  <li className={classes.statsItem}>
    <span className={classes.label}>{name}</span>
    <span className={classes.quantity}>{value}</span>
  </li>
);
