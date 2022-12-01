interface TableProps {
  tableTitle: string;
  columns: string[];
  rows: string[];
  gridSize?: number;
}

export default function GenericTable({
  tableTitle,
  columns,
  rows,
  gridSize,
}: TableProps) {
  return (
    <div className="sammary-font-small table-div">
      <div className="table-title">{tableTitle}</div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            {columns.map((col, index) => (
              <th key={`table-col-${index}`}>{col}</th>
            ))}
          </tr>
          <tr>
            {rows.map((val, index) => (
              <td key={`table-row-${index}`}> {val}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
