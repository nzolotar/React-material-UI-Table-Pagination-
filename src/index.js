import React from "react";
import * as ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import MaterialTable from "material-table";
//import TablePagination from "@material-ui/core/TablePagination";

import "./styles.css";

export function Table() {
  const [dataItems, setDataItems] = useState([]);
  const [dataLength, setDataLength] = useState(0);

  const dataTableMock = [
    {
      id: Math.random(),
      first_column: 11,
      second_column: 12,
      third_column: 13
    },
    {
      id: Math.random(),
      first_column: 21,
      second_column: 22,
      third_column: 23
    },
    {
      id: Math.random(),
      first_column: 31,
      second_column: 32,
      third_column: 33
    },
    {
      id: Math.random(),
      first_column: 31,
      second_column: 32,
      third_column: 33
    },
    {
      id: Math.random(),
      first_column: 41,
      second_column: 42,
      third_column: 43
    },
    {
      id: Math.random(),
      first_column: 51,
      second_column: 52,
      third_column: 53
    },
    {
      id: Math.random(),
      first_column: 61,
      second_column: 62,
      third_column: 63
    },
    {
      id: Math.random(),
      first_column: 71,
      second_column: 72,
      third_column: 73
    },
    {
      id: Math.random(),
      first_column: 81,
      second_column: 82,
      third_column: 83
    },
    {
      id: Math.random(),
      first_column: 91,
      second_column: 92,
      third_column: 93
    }
  ];

  useEffect(() => {
    setTimeout(() => setDataItems(dataTableMock), 100);
    setDataLength(dataTableMock.length);
  });

  const colDef = [
    { title: "First column", field: "first_column" },
    { title: "Second column", field: "second_column" },
    { title: "Third column", field: "third_column" }
  ];

  return (
    <>
      <span>material-table: 1.69.3 </span>
      <span>material-ui/core: 4.11.4 </span>
      <span>material-ui/icons: 4.11.2 </span>
      <MaterialTable
        title="Sample Table"
        columns={colDef}
        data={dataItems}
        // other props
        options={{
          exportButton: true,
          paging: true,
          pageSize: 5,
          pageSizeOptions: [5, 10, 20, { value: dataLength, label: "All" }],
          search: true,
          draggable: false,
          filtering: false,
          headerStyle: {
            backgroundColor: "#6d6d6d",
            color: "#FFF"
          }
        }}
      />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Table />, rootElement);
