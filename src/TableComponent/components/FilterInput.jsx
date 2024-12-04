import React from "react";

const FilterInput = ({ columnKey, setFilters }) => {
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [columnKey]: value,
    }));
  };

  return <input type="text" onChange={handleFilterChange} placeholder="Filter..." />;
};

export default FilterInput;
