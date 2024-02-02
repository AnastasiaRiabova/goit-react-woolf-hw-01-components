import classes from './Statistics.module.css';
import { StatisticsItem } from './infrastructure/StatisticsItem/StatisticsItem';

export const Statistics = ({ title, stats }) => {
  return (
    <div className={classes.statistics}>
      {title && <h2 className={classes.title}>{title} </h2>}
      <ul className={classes.statList}>
        {stats.map(stat => (
          <StatisticsItem key={stat.id} stat={stat} />
        ))}
      </ul>
    </div>
  );
};
