import React from "react";

const TableBody = ({ data, columns, styleConfig }) => {
  return (
    <tbody style={{ backgroundColor: styleConfig.bodyBg, color: styleConfig.bodyColor }}>
      {data.map((row, index) => (
        <tr key={index}>
          {columns.map((col) => (
            <td key={col.key} style={{ fontSize: styleConfig.bodyFontSize }}>
              {row[col.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
