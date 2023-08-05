import { TableHead } from './TableHead';
import { TableData } from './TransactionHistory.styled ';


export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <TableHead />
      <TableData>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </TableData>
    </table>
  );
};
