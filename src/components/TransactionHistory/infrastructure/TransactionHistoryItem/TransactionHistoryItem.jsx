export const TransactionHistoryItem = ({
  item: { id, type, amount, currency },
}) => (
  <tr key={id}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);
