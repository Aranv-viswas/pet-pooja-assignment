import React from "react";
import ValidationMessage from "./ValidationMessage";

const FormField = ({ type, label, placeholder, options, value, onChange, error, styles }) => {
  const renderField = () => {
    switch (type) {
      case "text":
      case "email":
      case "number":
        return (
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            style={styles?.input}
          />
        );
      case "textarea":
        return (
          <textarea
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            style={styles?.input}
          />
        );
      case "select":
        return (
          <select value={value} onChange={(e) => onChange(e.target.value)} style={styles?.input}>
            <option value="">Select an option</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => onChange(e.target.checked)}
            style={styles?.input}
          />
        );
      case "radio":
        return options.map((opt) => (
          <label key={opt.value} style={styles?.label}>
            <input
              type="radio"
              name={label}
              value={opt.value}
              checked={value === opt.value}
              onChange={(e) => onChange(e.target.value)}
              style={styles?.input}
            />
            {opt.label}
          </label>
        ));
      case "date":
        return (
          <input
            type="date"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={styles?.input}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles?.container}>
      <label style={styles?.label}>{label}</label>
      {renderField()}
      {error && <ValidationMessage error={error} styles={styles?.error} />}
    </div>
  );
};

export default FormField;
