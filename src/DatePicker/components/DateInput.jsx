import React from "react";

const DateInput = ({ label, value, onChange, styles }) => {
  return (
    <div>
      <label style={styles?.label}>{label}</label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: "5px", border: "1px solid #ccc", borderRadius: "5px", ...styles }}
      />
    </div>
  );
};

export default DateInput;
