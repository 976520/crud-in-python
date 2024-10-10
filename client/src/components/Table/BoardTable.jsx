import React from "react";
import { Table, TableHeader, TableCell } from "./Style";

const BoardTable = ({ board }) => (
  <Table>
    <thead>
      <tr>
        <TableHeader width="5%">No.</TableHeader>
        <TableHeader width="15%">Title</TableHeader>
        <TableHeader width="35%">Context</TableHeader>
      </tr>
    </thead>
    <tbody>
      {board.map((row, index) => (
        <tr key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{row[0]}</TableCell>
          <TableCell>{row[1]}</TableCell>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default BoardTable;
