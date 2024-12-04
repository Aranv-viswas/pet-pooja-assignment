import React, { useState, useEffect } from "react";
import PresetButtons from "./PresetButtons";
import CustomDateRange from "./CustomDateRange";

const DatePickerContainer = ({ onDateChange, styles }) => {
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [customRange, setCustomRange] = useState({ from: "", to: "" });

  useEffect(() => {
    const today = new Date();
    let newRange = {};

    switch (selectedPreset) {
      case "Today":
        newRange = { from: today.toISOString().split("T")[0], to: today.toISOString().split("T")[0] };
        break;
      case "Yesterday":
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        newRange = { from: yesterday.toISOString().split("T")[0], to: yesterday.toISOString().split("T")[0] };
        break;
      case "This Month":
        newRange = {
          from: new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split("T")[0],
          to: new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().split("T")[0],
        };
        break;
      case "Last Month":
        const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
        newRange = {
          from: lastMonthStart.toISOString().split("T")[0],
          to: lastMonthEnd.toISOString().split("T")[0],
        };
        break;
      default:
        break;
    }

    if (selectedPreset !== "Custom Range") {
      setCustomRange(newRange);
      onDateChange(newRange);
    }
  }, [selectedPreset, onDateChange]);

  const handleCustomRangeChange = (newRange) => {
    setCustomRange(newRange);
    onDateChange(newRange);
  };

  return (
    <div style={styles?.container}>
      <PresetButtons
        selectedPreset={selectedPreset}
        onPresetChange={setSelectedPreset}
        styles={styles?.buttons}
      />
      {selectedPreset === "Custom Range" && (
        <CustomDateRange
          customRange={customRange}
          onCustomRangeChange={handleCustomRangeChange}
          styles={styles?.customRange}
        />
      )}
    </div>
  );
};

export default DatePickerContainer;
