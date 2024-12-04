import React from "react";
import FilterInput from "./FilterInput";

const TableHeader = ({ columns, sortConfig, setSortConfig, setFilters, styleConfig }) => {
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    } else if (sortConfig.key === key && sortConfig.direction === "descending") {
      direction = null;
    }
    setSortConfig({ key, direction });
  };

  return (
    <thead style={{ backgroundColor: styleConfig.headerBg, color: styleConfig.headerColor }}>
      <tr>
        {columns.map((col) => (
          <th
            key={col.key}
            style={{ fontSize: styleConfig.headerFontSize }}
            onClick={() => col.sortable && handleSort(col.key)}
          >
            {col.title}{" "}
            {sortConfig.key === col.key
              ? sortConfig.direction === "ascending"
                ? "🔼"
                : "🔽"
              : ""}
            {col.filterable && <FilterInput columnKey={col.key} setFilters={setFilters} />}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
