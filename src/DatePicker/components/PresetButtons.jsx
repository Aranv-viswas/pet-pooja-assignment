import React from "react";

const presets = ["Today", "Yesterday", "This Month", "Last Month", "Custom Range"];

const PresetButtons = ({ selectedPreset, onPresetChange, styles }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {presets.map((preset) => (
        <button
          key={preset}
          onClick={() => onPresetChange(preset)}
          style={{
            padding: "10px",
            backgroundColor: selectedPreset === preset ? "#007BFF" : "#f0f0f0",
            color: selectedPreset === preset ? "#fff" : "#000",
            border: "1px solid #ccc",
            borderRadius: "5px",
            ...styles,
          }}
        >
          {preset}
        </button>
      ))}
    </div>
  );
};

export default PresetButtons;
