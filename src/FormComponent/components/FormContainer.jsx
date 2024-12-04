import React, { useState } from "react";
import FormField from "./FormField";

const FormContainer = ({ config, onSubmit, styles }) => {
  const [formData, setFormData] = useState(
    config.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || "";
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState({});

  const validateField = (name, value, rules) => {
    if (rules?.required && !value) {
      return "This field is required.";
    }
    if (rules?.minLength && value.length < rules.minLength) {
      return `Minimum length is ${rules.minLength} characters.`;
    }
    if (rules?.maxLength && value.length > rules.maxLength) {
      return `Maximum length is ${rules.maxLength} characters.`;
    }
    if (rules?.pattern && !new RegExp(rules.pattern).test(value)) {
      return "Invalid format.";
    }
    return null;
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    if (config.find((field) => field.name === name)?.validation) {
      const error = validateField(
        name,
        value,
        config.find((field) => field.name === name).validation
      );
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    config.forEach((field) => {
      const error = validateField(field.name, formData[field.name], field.validation);
      if (error) newErrors[field.name] = error;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    }
  };

  return (
    <form style={styles?.form} onSubmit={handleSubmit}>
      {config.map((field) => (
        <FormField
          key={field.name}
          {...field}
          value={formData[field.name]}
          error={errors[field.name]}
          onChange={(value) => handleChange(field.name, value)}
          styles={styles?.field}
        />
      ))}
      <div>
        <button type="submit" style={styles?.button}>
          Submit
        </button>
        <button
          type="button"
          style={styles?.button}
          onClick={() => setFormData(config.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}))}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default FormContainer;
