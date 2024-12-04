import FormContainer from "./components/FormContainer"

const formConfig = [
  {
    type: "text",
    label: "Name",
    name: "name",
    placeholder: "Enter your name",
    validation: { required: true, minLength: 3 },
  },
  {
    type: "email",
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    validation: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  },
  {
    type: "textarea",
    label: "Feedback",
    name: "feedback",
    placeholder: "Enter your feedback",
  },
  {
    type: "select",
    label: "Country",
    name: "country",
    options: [
      { label: "India", value: "IN" },
      { label: "USA", value: "US" },
    ],
  },
  {
    type: "checkbox",
    label: "Accept Terms",
    name: "terms",
  },
];


const App = () => {
  const handleSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div>
      <h1>Custom Form</h1>
      <FormContainer
        config={formConfig}
        onSubmit={handleSubmit}
        styles={{
          form: { padding: "20px", backgroundColor: "#f9f9f9" },
          field: { marginBottom: "15px" },
          label: { fontWeight: "bold" },
          input: { padding: "10px", border: "1px solid #ccc" },
          button: { padding: "10px 20px", margin: "10px" },
        }}
      />
    </div>
  );
};

export default App;
