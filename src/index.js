import React from "react";
import ReactDOM from "react-dom";

import DataTable from "./components/DataTable";
import data from "./lib/data";
import data1 from "./lib/data1";

function App() {
  return (
    <>
      <DataTable data={data} />
      <br />
      <br />
      <DataTable title="Students" data={data1} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
