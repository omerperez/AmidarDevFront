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

    // <div className="summary-box">
    //   <div className="summary-sub-title">
    //     <span className={`section-title-20`}>{tableTitle}</span>
    //   </div>
    //   <Card className="white-box">
    //     <Grid container spacing={1}>
    //       {columns.map((col, index) => (
    //         <Grid item sm={gridSize ?? 0.8} key={index} className="mb-10">
    //           <div className="label-pos">
    //             <span className="card-body-text-label">{col}</span>
    //           </div>
    //           <span className="card-body-text-value">{rows[index]}</span>
    //         </Grid>
    //       ))}
    //     </Grid>
    //   </Card>
    // </div>
  );
}
