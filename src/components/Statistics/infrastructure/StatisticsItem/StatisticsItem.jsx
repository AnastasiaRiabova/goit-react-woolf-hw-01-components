import classes from './StatisticsItem.module.css';
import { generateRandomColor } from '../../../../utils';

export const StatisticsItem = ({ stat: { label, percentage } }) => {
  return (
    <li
      className={classes.item}
      style={{ backgroundColor: generateRandomColor() }}
    >
      <span className={classes.label}>{label}</span>
      <span className={classes.percentage}>{percentage}%</span>
    </li>
  );
};
