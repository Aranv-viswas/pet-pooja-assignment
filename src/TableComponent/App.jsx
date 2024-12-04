import TableContainer from "./components/TableContainer";

const data = [
  { id: 1, name: "Alice", age: 25, salary: 50000 },
  { id: 2, name: "Bob", age: 30, salary: 60000 },
  { id: 3, name: "Charlie", age: 35, salary: 70000 },
];

const columns = [
  { title: "ID", key: "id", sortable: true, filterable: false },
  { title: "Name", key: "name", sortable: true, filterable: true },
  { title: "Age", key: "age", sortable: true, filterable: true },
  { title: "Salary", key: "salary", sortable: true, filterable: true },
];

const styleConfig = {
  headerFontSize: "16px",
  bodyFontSize: "14px",
  headerBg: "#f0f0f0",
  bodyBg: "#ffffff",
  headerColor: "#333",
  bodyColor: "#000",
};

const App = () => {
  return <TableContainer data={data} columns={columns} styleConfig={styleConfig} />;
};

export default App
