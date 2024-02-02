import classes from './TransactionHistory.module.css';
import { TransactionHistoryItem } from './infrastructure/TransactionHistoryItem/TransactionHistoryItem';

export const TransactionHistory = function ({ items }) {
  return (
    <table className={classes.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionHistoryItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};
