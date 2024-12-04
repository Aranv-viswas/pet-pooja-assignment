import React, { useState, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const TableContainer = ({ data, columns, styleConfig }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [filters, setFilters] = useState({});

  // Handle sorting logic
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    const sorted = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    return sorted;
  }, [data, sortConfig]);

  // Handle filtering logic
  const filteredData = useMemo(() => {
    return sortedData.filter((row) =>
      Object.entries(filters).every(([key, value]) =>
        value ? row[key].toString().toLowerCase().includes(value.toLowerCase()) : true
      )
    );
  }, [sortedData, filters]);

  return (
    <div>
      <table>
        <TableHeader
          columns={columns}
          sortConfig={sortConfig}
          setSortConfig={setSortConfig}
          setFilters={setFilters}
          styleConfig={styleConfig}
        />
        <TableBody data={filteredData} columns={columns} styleConfig={styleConfig} />
      </table>
    </div>
  );
};

export default TableContainer;
