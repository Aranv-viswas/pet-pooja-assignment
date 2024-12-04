import DatePickerContainer from "./components/DatePickerContainer";

const App = () => {
  const handleDateChange = (selectedRange) => {
    console.log("Selected Range: ", selectedRange);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Custom Date Picker</h1>
      <DatePickerContainer
        onDateChange={handleDateChange}
        styles={{
          container: { border: "1px solid #ccc", padding: "20px", borderRadius: "10px" },
          buttons: { fontSize: "14px" },
          customRange: { marginTop: "20px" },
        }}
      />
    </div>
  );
};

export default App;
