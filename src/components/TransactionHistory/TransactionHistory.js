import { TableHead } from './TableHead';


export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <TableHead />
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
