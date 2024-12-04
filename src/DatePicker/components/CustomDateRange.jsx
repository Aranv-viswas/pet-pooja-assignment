import React from "react";
import DateInput from "./DateInput";

const CustomDateRange = ({ customRange, onCustomRangeChange, styles }) => {
  const handleFromChange = (value) => {
    if (value <= customRange.to || !customRange.to) {
      onCustomRangeChange({ ...customRange, from: value });
    } else {
      alert("From date cannot be later than To date.");
    }
  };

  const handleToChange = (value) => {
    if (value >= customRange.from || !customRange.from) {
      onCustomRangeChange({ ...customRange, to: value });
    } else {
      alert("To date cannot be earlier than From date.");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", ...styles }}>
      <DateInput
        label="From"
        value={customRange.from}
        onChange={handleFromChange}
        styles={styles?.input}
      />
      <DateInput
        label="To"
        value={customRange.to}
        onChange={handleToChange}
        styles={styles?.input}
      />
    </div>
  );
};

export default CustomDateRange;
