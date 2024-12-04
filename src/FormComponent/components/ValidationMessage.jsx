import React from "react";

const ValidationMessage = ({ error, styles }) => {
  return <span style={{ color: "red", ...styles }}>{error}</span>;
};

export default ValidationMessage;
