import { TableHeadStyled } from "./TableHead.styled";

export const TableHead = () => {

  return (
    <TableHeadStyled>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TableHeadStyled>
  );
};
